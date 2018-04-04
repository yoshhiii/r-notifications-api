import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from 'users/users.module';
import { AlertsModule } from 'alerts/alerts.module';
import { AuthModule } from 'authentication/auth.module';

@Module({
  imports: [
    UsersModule,
    AlertsModule,
    AuthModule,
  ],
})
export class AppModule {}
