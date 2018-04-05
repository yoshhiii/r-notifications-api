import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Alert } from '../interfaces/alert.interface';
import { AlertDto } from '../dto/alert.dto';
import * as firebase from 'firebase';

@Component()
export class FirebaseService {
  constructor(
    @Inject('AlertModelToken') private readonly alertModel: Model<Alert>) {}

  async send(alertDto: AlertDto, email: string): Promise<any> {
    const data = {
      from: alertDto.author,
      to: email,
      subject: alertDto.title,
      text: alertDto.body,
    };
    // firebase.messaging().

    // mailgun.messages().send(data, async (error, body) => {
    //   return await body;
    // });

    return await null;
  }

}