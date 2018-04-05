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

    async send(alertDto: AlertDto): Promise<boolean> {
        console.log('what');
        return this.slack.webhook({
            channel: '#ranchdressing2',
            username: 'relias-notifications',
            text: 'This is a test message sent by the Relias-Notifications webhook bot',
        }, (err, response) => {
            if (response) return response;
            if (err) return err;
        });

    }
}