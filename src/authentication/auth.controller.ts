import { Controller, Post, HttpStatus, HttpCode, Get, Headers, Body, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

// tslint:disable-next-line:no-var-requires
const config = require('./config');

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('register')
  public async register(@Req() req, @Res() res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    this.userService.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      departments: req.body.departments,
      notificationPref: req.body.notificationPref,
    }).then(user => {
        // Create a token
        const jwtoken = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400, // expires in 24 hrs
        });
        return res.status(200).send({ auth: true, token: jwtoken});
      }).catch(err => {
        return res.status(500).send('There was an issue registering');
      });
  }

  @Get('me')
  public async getMe(@Req() req, @Res() res) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).send({ auth: false, message: 'No token provided'});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
      } else {
        this.userService.findById(decoded.id).then(user => {
          if (user) {
            return res.status(200).send(user);
          } else {
            return res.status(400).send('No user found');
          }
        }).catch(error => {
          return res.status(500).send('There was a problem finding the user');
        });
      }
    });
  }

  @Post('login')
  public async login(@Req() req, @Res() res) {
    this.userService.findByEmail(req.body.email).then(user => {
      if (user) {
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (passwordIsValid) {
          const jwtoken = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400,
          });
          return res.status(200).send({ auth: true, token: jwtoken });
        } else {
          return res.status(401).send({ auth: false, token: null });
        }
      } else {
        return res.status(404).send('No user found');
      }
    }).catch(error => {
      return res.status(500).send('server error');
    });
  }

  @Get('logout')
  public async logout(@Req() req, @Res() res) {
    res.status(200).send({ auth: false, token: null });
  }
}