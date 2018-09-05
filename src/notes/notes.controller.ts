import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNotesDto } from './dto/create-note.dto';
import { NotesService} from './notes.service';
import { Note as NoteInterface } from './interfaces/note.interface.ts';

@Controller('notes')
export class NotesController{
  constructor(private readonly notesService: NotesService){
    @Post()
    async create(@Body() createNoteDto: CreateNoteDto ){
      this.notesService.create(createNoteDto);
    }
    @Get()
    async findAll(): Promise<NoteInterface[]>{
      return this.notesService.findAll();
    }
    @Post()
    async update(id,@Body() text:string): Promise<NoteInterface>{
      return this.notesService.update(id,text);
    }
    @Post()
    async delete(id){
      this.notesService.delete(id);
    }
  }
}
