import { NotesConteroller } from './notes.controller';
import { NotesService } from './notes.service';
import { CreateNoteDto } from from './dto/create-note.dto';
import { Note as NoteInterface } from './interface/note.interface';
import { Model } from 'mongoose';

describe ('NotesController', () =>{
  let notesService: NotesService;
  let NotesController: NotesController;

  beforeEach(()=>{
    notesService = new NotesService(Model);
    notesController = new NotesController(notesService);
  });

  describe('create', ()=>{
    it('create a note and returns it', async()=>{
      var result;
      jest.spyOn(notesService,'create').mockImplementation(()=>result);
      const NoteT = new CreateNoteDto();
      expect(await notesController.create(testNote)).toBe(result);
    });
  });

  describe('findAll', ()=>{
    it('find all notes and returns it in an array', async()=>{
      var result = ['FindAllTest'];
      jest.spyOn(notesService,'findAll').mockImplementation(()=>result);
      expect(await notesController.findAll()).toBe(result);
    });
  });

  describe('update', ()=>{
    it('update a note and return it', async()=>{
      var result;
      jest.spyOn(notesService,'update').mockImplementation(()=>result);
      expect(await notesController.update("",{})).toBe(result);
    });
  });

  describe('delete', ()=>{
    it('deletes a note and return it', async()=>{
      var result;
      jest.spyOn(notesService,'delete').mockImplementation(()=>result);
      expect(await notesController.delete("")).toBe(result);
    });
  });

})
