"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            mongoose.Promise = global.Promise;
            return yield mongoose.connect('mongodb://ranchdressing2:hackathon2018@ds042607.mlab.com:42607/reliasalerts', {});
        }),
    },
];
//# sourceMappingURL=database.providers.js.map