import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User as UserInterface } from './interfaces/user.interface';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Post()
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
  @Get()
  async findAll(): Promise<UserInterface[]> {
    return this.usersService.findAll();
  }
  @Get(':username')
  @ApiResponse({ status: 404, description: 'User not foud.' })
  async findOne(@Param('username') username: string): Promise<UserInterface> {
    return this.usersService.findOne(username);
  }
  @Patch(':username')
  @ApiResponse({ status: 201, description: 'The user has been successfully updated.' })
  async update(@Param('username') username: string, @Body() updateUser){
    this.usersService.update(username, updateUser);
  }
  @Delete(':username')
  @ApiResponse({ status: 201, description: 'The user has been successfully deleted.' })
  async delete(@Param('username') username: string) {
    this.usersService.delete(username);
  }
}
