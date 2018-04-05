"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const alerts_controller_1 = require("./alerts.controller");
const alerts_service_1 = require("./alerts.service");
const alerts_providers_1 = require("../database/alerts.providers");
const database_module_1 = require("../database/database.module");
let AlertsModule = class AlertsModule {
};
AlertsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [alerts_controller_1.AlertsController],
        components: [
            alerts_service_1.AlertsService,
            ...alerts_providers_1.AlertsProviders,
        ],
    })
], AlertsModule);
exports.AlertsModule = AlertsModule;
//# sourceMappingURL=alerts.module.js.map