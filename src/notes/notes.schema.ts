import * as mongoose from 'mongoose';
export const NoteSchema = new mongoose.Schema({
  text:{
    type: String,
    required: true,
  },
  createdDate:{
    type: Date,
    required: true,
  },
  updatedDate:{
    type: Date,
    required: false,
  }
});
