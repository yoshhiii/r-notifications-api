import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from 'users/users.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
  ],
  components: [],
})
export class AppModule {}
