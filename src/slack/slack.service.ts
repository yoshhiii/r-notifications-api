import { Slack } from 'slack-node';
import { Component } from '@nestjs/common';

@Component()
export class SlackService {
    slack = new Slack();
    webhookUri = 'https://hooks.slack.com/services/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';

    constructor() {
        this.slack.setWebhook(this.webhookUri);
    }

    sendSlackNotification() {
        this.slack.webhook({
            channel: '#ranchdressing2',
            username: 'relias-notifications',
            text: 'This is a test message sent by the Relias-Notifications webhook bot',
        }, (err, response) => {

        });
    }
}