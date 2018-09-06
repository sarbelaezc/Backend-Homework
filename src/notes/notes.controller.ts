import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService} from './notes.service';
import { Note as NoteInterface } from './interfaces/note.interface';

@Controller('notes')
export class NotesController{
  constructor(private readonly notesService: NotesService){

    @Post()
    create(@Body() createNoteDto: CreateNoteDto ){
      this.notesService.create(createNoteDto);
    }
    @Get()
    findAll(): Promise<NoteInterface[]>{
      return this.notesService.findAll();
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body()updatedNote){
       this.notesService.update(id,updatedNote);
    }
    @Delete(':id')
    delete(@Param('id') id: string){
      this.notesService.delete(id);
    }
  }
}
