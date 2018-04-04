import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { UserDto } from '../dto/user.dto';

@Component()
export class UsersService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async create(userDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(userDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}