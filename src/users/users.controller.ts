import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User as UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      this.usersService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<UserInterface[]> {
      return this.usersService.findAll();
    }

    @Get(':username')
    async findOne(@Param('username') username: string): Promise<User> {
      return this.usersService.findOne(username);
    }

    @Patch(':username')
    async update(@Param('username') username: string){
      this.usersService.update(username, updateUser);
    }

    @Delete(':username')
    async delete(@Param('username') username: string){
      this.usersService.delete(username);
    }
}
