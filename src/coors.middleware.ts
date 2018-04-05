
import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class CoorsMiddleware implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    };
  }
}