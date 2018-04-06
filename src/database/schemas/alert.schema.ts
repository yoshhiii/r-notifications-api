import * as mongoose from 'mongoose';

export const AlertSchema = new mongoose.Schema({
  _id: String,
  title: String,
  author: String,
  body: String,
  recipients: [String],
  createdDate: Date,
});