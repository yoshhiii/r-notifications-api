import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Alert } from '../interfaces/alert.interface';
import { AlertDto } from '../dto/alert.dto';
const api_key = 'key-1e4f7f1347ddd9e131e1ebdc85b414e3';
const domain = 'sandbox2ff6710e28b743f28e15a06994291264.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain});

@Component()
export class MailgunService {
  constructor(
    @Inject('AlertModelToken') private readonly alertModel: Model<Alert>) {}

  async send(alertDto: AlertDto): Promise<boolean> {
    const data = {
      from: 'cwalsh2189@gmail.com',
      to: 'cwalsh@relias.com',
      subject: 'Hello',
      test: 'test message',
    };

    mailgun.messages().send(data, async (error, body) => {
      return await true;
    });

    return await false;
  }

}