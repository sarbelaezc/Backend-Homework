import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '../constants';

@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findOne(username):Promise<User> {
      return await this.userModel.findOne({username: username}, function(err,obj) {}).exec();
    }

    async update(username, updateUser): Promise<User> {
      return await this.userModel.updateOne({username: username}, updateUser. function(err) {}).exec();
    }

    async delete(username): Promise<User> {
      return await this.userModel.deleteOne({username: username}, function(err) {}).exec();
    }
}
