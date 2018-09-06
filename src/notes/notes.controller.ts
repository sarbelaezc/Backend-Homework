import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService} from './notes.service';
import { Note as NoteInterface } from './interfaces/note.interface';

@Controller('notes')
export class NotesController{
  constructor(private readonly notesService: NotesService){

    @Post()
    async create(@Body() createNoteDto: CreateNoteDto ){
      this.NotesService.create(createNoteDto);
    }
    @Get()
    async findAll(): Promise<NoteInterface[]>{
      return this.NotesService.findAll();
    }
    @Post()
    async update(@Param('id') id:number,@Body()text): Promise<NoteInterface>{
      return this.NotesService.update(id,text);
    }
    @Post()
    async delete(@Param('id') id:number){
      this.NotesService.delete(id);
    }
  }
}
