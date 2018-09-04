import { Document } from 'mongoose';

export interface Note extends Document{
  readonly text: string;
  readonly createdDate: date;
  readonly uptatedDate: date;
}
