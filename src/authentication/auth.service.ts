import * as jwt from 'jsonwebtoken';
import { Component, Inject, Req, Res } from '@nestjs/common';
import { UsersService } from '../users/users.service';
// tslint:disable-next-line:no-var-requires
const config = require('./config');

@Component()
export class AuthService {
  constructor(private readonly usersService: UsersService) { }

  // async createToken(headers) {
  //   const expiresIn = 60 * 60, secretOrKey = 'secret';
  //   const requestUser = { email: headers.email, password: headers.password };
  //   let authorized: boolean = false;

  //   await this.usersService.findByEmail(requestUser.email)
  //     .then(u => authorized = u.password === requestUser.password);

  //   if (authorized){
  //     const token = jwt.sign(requestUser, secretOrKey, { expiresIn });
  //     return {
  //       expires_in: expiresIn,
  //       access_token: token,
  //     };
  //   } else {
  //     return null;
  //   }
  // }

  // async validateUser(signedUser): Promise<boolean> {
  //   // put some validation logic here
  //   // for example query user by id / email / username
  //   return true;
  // }
}