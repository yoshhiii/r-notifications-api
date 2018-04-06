import { Controller, Post, Delete, HttpStatus, HttpCode, Get, Headers, Body, Req, Res, Query } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { Alert } from '../interfaces/alert.interface';
import { AlertDto } from '../dto/alert.dto';

@Controller('alerts')
export class AlertsController {
  constructor(
    private readonly alertsService: AlertsService,
  ) {}

  @Get()
  findAll(): Promise<Alert[]> {
    return this.alertsService.findAll();
  }

  @Post()
  create(@Body() alertDto: AlertDto): Promise<Alert> {
    return this.alertsService.create(alertDto);
  }

  @Post('send')
  send(@Body() alertDto: AlertDto): Promise<any> {
    return this.alertsService.send(alertDto);
  }

  @Delete()
  async delete(@Query() query): Promise<boolean> {
    return this.alertsService.delete(query);
  }
}