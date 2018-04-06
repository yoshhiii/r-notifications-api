import { Component, Inject } from '@nestjs/common';
import { AlertDto } from '../dto/alert.dto';
import { Model } from 'mongoose';
import { Alert } from '../interfaces/alert.interface';
const Slack = require('slack-node');

@Component()
export class SlackService {
    slack = new Slack();
    webhookUri = 'https://hooks.slack.com/services/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';

    constructor(@Inject('AlertModelToken') private readonly alertModel: Model<Alert>) {
        this.slack.setWebhook(this.webhookUri);
    }

    async send(alertDto: AlertDto): Promise<any> {
        return await this.slack.webhook({
            username: 'relias-notifications',
text: 'Subject: ' + alertDto.title + `
Message: ` + alertDto.body,
        }, (err, response) => {

        });
    }
}