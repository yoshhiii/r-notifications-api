import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from 'users/users.controller';
import { UsersService } from 'users/users.service';
import { AlertsController } from 'alerts/alerts.controller';
import { AlertsService } from 'alerts/alerts.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    AlertsController,
  ],
  components: [
    UsersService,
    AlertsService,
  ],
})
export class AppModule {}
