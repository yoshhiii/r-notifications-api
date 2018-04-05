"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.AlertSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    recipients: [String],
    createdDate: Date,
});
//# sourceMappingURL=alert.schema.js.map