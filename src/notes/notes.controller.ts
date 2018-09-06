import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService} from './notes.service';
import { Note as NoteInterface } from './interfaces/note.interface.ts';
import { ApiResponse } from '@nestjs/swagger';

@Controller('notes')
export class NotesController{
  constructor(private readonly notesService: NotesService){

    @Post()
    @ApiResponse({ status: 201, description: 'The note has been successfully created' })
    async create(@Body() createNoteDto: CreateNoteDto ){
      this.notesService.create(createNoteDto);
    }

    @Get()
    async findAll(): Promise<NoteInterface[]>{
      return this.notesService.findAll();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The note has been successfully updated' })
    async update(id,@Body() text): Promise<NoteInterface>{
      return this.notesService.update(id,text);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The note has been successfully deleted' })
    async delete(@Param('id') id:number){
      this.notesService.delete(id);
    }
  }
}
