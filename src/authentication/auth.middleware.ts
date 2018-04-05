
import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

// tslint:disable-next-line:no-var-requires
const config = require('./config');

@Middleware()
export class AuthMiddleware implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return (req, res, next) => {
      if (req.path !== '/auth/login') {
        const token = req.headers['x-access-token'];
        if (!token) {
          return res.status(401).send({ auth: false, message: 'No token provided' });
        }
        jwt.verify(token, config.secret, (err, decoded) => {
          if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
          } else {
            next();
          }
        });
      } else {
        next();
      }
    };
  }
}