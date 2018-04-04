import { Module } from '@nestjs/common';
import { AlertsController } from './alerts.controller';
import { AlertsService } from './alerts.service';
import { AlertsProviders } from '../database/alerts.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AlertsController],
  components: [
    AlertsService,
    ...AlertsProviders,
  ],
})
export class AlertsModule {}