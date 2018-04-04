import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly email: number;
  readonly departments: Array<string>;
  readonly notificationPref: string;
}