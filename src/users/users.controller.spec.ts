import { UsersConteroller } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from from './dto/create-user.dto';
import { User as UserInterface } from './interface/user.interface';
import { Model } from 'mongoose';

describe('UsersController', () =>{
  let usersService: UsersService;
  let usersController: UsersController;

  beforeEach(()=>{
    usersService: UsersService(Model);
    usersController: UsersController(userService);
  });

  describe('create',()=>{
    it('create a user and returns it', async()=>{
      var result;
      jest.spyOn(usersService, 'create').mockImplementation(()=>result);
      const UserT = new CreateUserDto();
      expect (await usersController.create(UserT)).toBe(result);
    });
  });

  describe('findAll',()=>{
    it('find all notes and returns it in an array', async()=>{
      var result = ['FindAllTest'];
      jest.spyOn(usersService, 'findAll').mockImplementation(()=>result);
      expect (await usersController.findAll()).toBe(result);
    });
  });

  describe('update',()=>{
    it('update an user and returns it', async()=>{
      var result;
      jest.spyOn(usersService, 'update').mockImplementation(()=>result);
      expect (await usersController.update("", )).toBe(result);
    });
  });

  describe('delete',()=>{
    it('delete an user and returns it', async()=>{
      var result;
      jest.spyOn(usersService, 'delete').mockImplementation(()=>result);
      expect (await usersController.delete("")).toBe(result);
    });
  });
});
