import { Document } from 'mongoose';
import { Note as NoteInterface } from '../../notes/interface/note.interface';

export interface User extends Document {
  readonly username: string;
  readonly name: string;
  // readonly notes: [NoteInterface];
}
