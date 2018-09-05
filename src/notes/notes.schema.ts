import * as mongoose from 'mongoose';
export const NoteSchema = new mongoose.Schema({
  text:{
    type: String,
    required: true,
  },
  createdDate:{
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedDate:{
    type: Date,
    default: Date.now,
    required: false,
  }
});
