import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';

import { Note } from './interfaces/note.interface';
import {CreateNoteDto} from './dto/create-user.dto';
import {NOTE_MODEL_PROVIDER} from '../constants';

@Component()
export class NotesService{
  constructor(@Inject(NOTE_MODEL_PROVIDER) private readonly noteModel: Model<Note>){}
  async create(createNoteDto: CreateNoteDto): Promise<Note>{
    const createNote = new this.noteModel(createNoteDto);
    return await createNote.save();
  }

  async findAll(): Promise<Note[]>{
    return await this.noteModel.find().exec();
  }
}
