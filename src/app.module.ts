import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './authentication/auth.module';
import { UsersModule } from './users/users.module';
import { AlertsModule } from './alerts/alerts.module';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    AlertsModule,
    DepartmentsModule,
  ],
})
export class AppModule {}
