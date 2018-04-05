import { Model } from 'mongoose';
import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Alert } from '../interfaces/alert.interface';
import { AlertDto } from '../dto/alert.dto';
import { MailgunService } from './mailgun.service';
import { UsersService } from '../users/users.service';
import { DepartmentDto } from 'dto/department.dto';
import { UserDto } from 'dto/user.dto';
import { User } from 'interfaces/user.interface';

@Component()
export class AlertsService {
  constructor(
    @Inject('AlertModelToken') private readonly alertModel: Model<Alert>,
    private readonly mailgunService: MailgunService,
    private readonly userService: UsersService) {}

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

  async send(alertDto: AlertDto): Promise<any> {
    const departments: Array<DepartmentDto> = alertDto.recipients;
    this.userService.findByDepartment(departments).then(users => {
      users.forEach(user => {
        if (user.notificationPref === 'Email') {
          this.mailgunService.send(alertDto, user.email);
        }
      });
    });
    return null;
  }
}