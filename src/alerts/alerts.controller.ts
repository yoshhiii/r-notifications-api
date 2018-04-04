import { Controller, Get } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { Alert } from 'interfaces/alert.interface';

@Controller('alerts')
export class AlertsController {
  constructor(
    private readonly alertsService: AlertsService,
  ) {}

  @Get()
  findAll(): Promise<Alert[]> {
    return this.alertsService.findAll();
  }
}