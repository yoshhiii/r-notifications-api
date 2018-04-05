import * as passport from 'passport';
import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { AuthMiddleware } from './auth.middleware';

@Module({
  imports: [UsersModule],
  components: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}