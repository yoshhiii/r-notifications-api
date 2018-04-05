"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const slack_node_1 = require("slack-node");
const common_1 = require("@nestjs/common");
let SlackService = class SlackService {
    constructor() {
        this.slack = new slack_node_1.Slack();
        this.webhookUri = 'https://hooks.slack.com/services/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';
        this.slack.setWebhook(this.webhookUri);
    }
    send(alertDto) {
        this.slack.webhook({
            channel: '#ranchdressing2',
            username: 'relias-notifications',
            text: 'This is a test message sent by the Relias-Notifications webhook bot',
        }, (err, response) => {
        });
    }
};
SlackService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [])
], SlackService);
exports.SlackService = SlackService;
//# sourceMappingURL=slack.service.js.map