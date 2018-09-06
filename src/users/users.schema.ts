import * as mongoose from 'mongoose';
import { NoteSchema } from '../notes/notes.schema';

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    notes: [NoteSchema],
});
