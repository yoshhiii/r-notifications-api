import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './authentication/auth.module';
import { UsersModule } from './users/users.module';
import { AlertsModule } from './alerts/alerts.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthMiddleware } from './authentication/auth.middleware';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    AlertsModule,
    DepartmentsModule,
  ],
})
export class AppModule {
  public configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(AuthMiddleware).forRoutes(
      { path: '/*', method: RequestMethod.ALL },
    );
  }
}
