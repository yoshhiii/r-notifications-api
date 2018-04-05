"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./authentication/auth.module");
const users_module_1 = require("./users/users.module");
const alerts_module_1 = require("./alerts/alerts.module");
const departments_module_1 = require("./departments/departments.module");
const auth_middleware_1 = require("./authentication/auth.middleware");
const coors_middleware_1 = require("./coors.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(coors_middleware_1.CoorsMiddleware).forRoutes({ path: '/*', method: common_1.RequestMethod.ALL });
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({ path: '/*', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            alerts_module_1.AlertsModule,
            departments_module_1.DepartmentsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map