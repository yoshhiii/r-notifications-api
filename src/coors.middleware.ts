
import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class CoorsMiddleware implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'content-type, authorization');
        res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
        if (req.method === 'OPTIONS') {
          res.sendStatus(200);
          // next();
        }
        else {
          next();
        }
    };
  }
}