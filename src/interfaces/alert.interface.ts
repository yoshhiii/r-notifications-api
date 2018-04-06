import { Document } from 'mongoose';

export interface Alert extends Document {
  readonly _id: string;
  readonly title: string;
  readonly author: string;
  readonly body: string;
  readonly recipients: Array<string>;
  readonly createdDate: Date;
}