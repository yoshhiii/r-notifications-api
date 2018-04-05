import { Model } from 'mongoose';
import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Alert } from '../interfaces/alert.interface';
import { AlertDto } from '../dto/alert.dto';

@Component()
export class AlertsService {
  constructor(
    @Inject('AlertModelToken') private readonly alertModel: Model<Alert>) {}

  async create(alertDto: AlertDto): Promise<Alert> {
    if (alertDto == null || alertDto.author == null || alertDto.author.length === 0) {
      throw new HttpException('Invalid alert model', HttpStatus.BAD_REQUEST);
    }
    alertDto.createdDate = new Date();

    const createdAlert = new this.alertModel(alertDto);
    return await createdAlert.save();
  }

  async findAll(): Promise<Alert[]> {
    return await this.alertModel.find().exec();
  }
}