import * as mongoose from 'mongoose';

export const AlertSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  recipients: [String],
  createdDate: Date,
});