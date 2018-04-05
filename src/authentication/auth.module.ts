import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { AuthMiddleware } from './auth.middleware';

@Module({
  imports: [UsersModule],
  components: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}