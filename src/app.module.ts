import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from 'users/users.module';
import { AlertsModule } from 'alerts/alerts.module';

@Module({
  imports: [
    UsersModule,
    AlertsModule,
  ],
})
export class AppModule {}
