"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const config = require('./config');
let AuthMiddleware = class AuthMiddleware {
    resolve(...args) {
        return (req, res, next) => {
            if (req.path !== '/auth/login') {
                const token = req.headers['x-access-token'];
                if (!token) {
                    return res.status(401).send({ auth: false, message: 'No token provided' });
                }
                jwt.verify(token, config.secret, (err, decoded) => {
                    if (err) {
                        return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
                    }
                    else {
                        next();
                    }
                });
            }
            else {
                next();
            }
        };
    }
};
AuthMiddleware = __decorate([
    common_1.Middleware()
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map