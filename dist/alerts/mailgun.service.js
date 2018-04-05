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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const api_key = 'key-1e4f7f1347ddd9e131e1ebdc85b414e3';
const domain = 'sandbox2ff6710e28b743f28e15a06994291264.mailgun.org';
const mailgun = require('mailgun-js')({ apiKey: api_key, domain });
let MailgunService = class MailgunService {
    constructor(alertModel) {
        this.alertModel = alertModel;
    }
    send(alertDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                from: 'cwalsh2189@gmail.com',
                to: 'cwalsh@relias.com',
                subject: 'Hello',
                test: 'test message',
            };
            mailgun.messages().send(data, (error, body) => __awaiter(this, void 0, void 0, function* () {
                return yield true;
            }));
            return yield false;
        });
    }
};
MailgunService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('AlertModelToken')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MailgunService);
exports.MailgunService = MailgunService;
//# sourceMappingURL=mailgun.service.js.map