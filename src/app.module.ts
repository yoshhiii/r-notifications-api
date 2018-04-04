import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from 'users/users.controller';
import { AlertsController } from 'alerts/alerts.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    AlertsController,
  ],
  components: [],
})
export class AppModule {}
