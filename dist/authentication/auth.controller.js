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
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
const config = require('./config');
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = bcrypt.hashSync(req.body.password, 8);
            this.userService.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                departments: req.body.departments,
                notificationPref: req.body.notificationPref,
            }).then(user => {
                const jwtoken = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 86400,
                });
                return res.status(200).send({ auth: true, token: jwtoken });
            }).catch(err => {
                return res.status(500).send('There was an issue registering');
            });
        });
    }
    getMe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.headers['x-access-token'];
            if (!token) {
                return res.status(401).send({ auth: false, message: 'No token provided' });
            }
            jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
                }
                else {
                    this.userService.findById(decoded.id).then(user => {
                        if (user) {
                            return res.status(200).send(user);
                        }
                        else {
                            return res.status(400).send('No user found');
                        }
                    }).catch(error => {
                        return res.status(500).send('There was a problem finding the user');
                    });
                }
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.userService.findByEmail(req.body.email).then(user => {
                if (user) {
                    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                    if (passwordIsValid) {
                        const jwtoken = jwt.sign({ id: user._id }, config.secret, {
                            expiresIn: 86400,
                        });
                        return res.status(200).send({ auth: true, token: jwtoken });
                    }
                    else {
                        return res.status(401).send({ auth: false, token: null });
                    }
                }
                else {
                    return res.status(404).send('No user found');
                }
            }).catch(error => {
                return res.status(500).send('server error');
            });
        });
    }
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).send({ auth: false, token: null });
        });
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.Get('me'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMe", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get('logout'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map