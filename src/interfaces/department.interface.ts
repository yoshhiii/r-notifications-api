import { Document } from 'mongoose';

export interface Department extends Document {
  readonly name: string;
}