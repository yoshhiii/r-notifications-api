import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from 'users/users.controller';
import { UsersService } from 'users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
  ],
  components: [UsersService],
})
export class AppModule {}
