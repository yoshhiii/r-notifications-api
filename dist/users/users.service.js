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
const core_1 = require("@nestjs/core");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = new this.userModel(userDto);
            let duplicate = false;
            if (createdUser == null || createdUser.name == null || createdUser.name.length === 0
                || createdUser.email == null || createdUser.email.length === 0) {
                throw new core_1.HttpException('Invalid user model', common_1.HttpStatus.BAD_REQUEST);
            }
            yield this.findByEmail(createdUser.email).then(foundUser => {
                if (foundUser !== null) {
                    duplicate = foundUser.email === createdUser.email;
                }
            });
            if (!duplicate) {
                return yield createdUser.save();
            }
            else {
                throw new core_1.HttpException('Duplicate user', common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    update(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userDto == null || userDto.name == null || userDto.name.length === 0
                || userDto.email == null || userDto.email.length === 0) {
                throw new core_1.HttpException('Invalid user model', common_1.HttpStatus.BAD_REQUEST);
            }
            let foundUser;
            yield this.findByEmail(userDto.email).then(user => foundUser = user);
            if (foundUser == null) {
                throw new core_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                yield this.userModel.findOneAndUpdate({ email: foundUser.email }, userDto).exec();
            }
        });
    }
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query.departments != null) {
                const departmentArray = query.departments.split(',');
                const departmentQuery = [];
                departmentArray.forEach(d => departmentQuery.push({ departments: d }));
                query = { $or: departmentQuery };
            }
            return yield this.userModel.find(query).exec();
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOne()
                .where('email').equals(email)
                .exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOne()
                .where('_id').equals(id)
                .exec();
        });
    }
};
UsersService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('UserModelToken')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map