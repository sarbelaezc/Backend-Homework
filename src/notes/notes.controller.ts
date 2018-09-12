import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService} from './notes.service';
import { Note as NoteInterface } from './interfaces/note.interface';
import { ApiResponse } from '@nestjs/swagger';

@Controller('notes')
export class NotesController{
  constructor(private readonly notesService: NotesService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'The note has been successfully created.'})
  async create(@Body() createNoteDto: CreateNoteDto ){
    createNoteDto.createdDate = new Date();
    this.notesService.create(createNoteDto);
  }
  @Get()
  @ApiResponse({ status: 404, description: 'Notes not found.'})
  async findAll(): Promise<NoteInterface[]>{
    return this.notesService.findAll();
  }
  @Patch(':id')
  @ApiResponse({ status: 201, description: 'The note has been successfully updated.'})
  async update(@Param('id') id: string, @Body() updatedNote){
     this.notesService.update(id,updatedNote);
  }
  @Delete(':id')
  @ApiResponse({ status: 201, description: 'The note has been successfully deleted.'})
  async delete(@Param('id') id: string){
    this.notesService.delete(id);
  }
  @Get(':username')
  async find(@Param('username') username: string):Promise<NoteInterface[]>{
    return this.notesService.find(username);
  }
}
