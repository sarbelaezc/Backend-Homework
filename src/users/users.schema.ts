import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    }//,
    // notes: {
    //     type: [NoteSchema],
    //     required: false,
    // }
});
