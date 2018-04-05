import { Module } from '@nestjs/common';
import { AlertsController } from './alerts.controller';
import { AlertsService } from './alerts.service';
import { AlertsProviders } from '../database/alerts.providers';
import { DatabaseModule } from '../database/database.module';
import { MailgunService } from './mailgun.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [AlertsController],
  components: [
    AlertsService,
    MailgunService,
    ...AlertsProviders,
  ],
})
export class AlertsModule {}