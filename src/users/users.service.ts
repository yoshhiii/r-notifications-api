import { Model } from 'mongoose';
import { Component, Inject, Param, HttpStatus } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { UserDto } from '../dto/user.dto';
import { HttpException } from '@nestjs/core';

@Component()
export class UsersService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async create(userDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(userDto);
    let duplicate: boolean = false;

    if (createdUser == null || createdUser.name == null || createdUser.name.length === 0
        || createdUser.email == null || createdUser.email.length === 0) {
      throw new HttpException('Invalid user model', HttpStatus.BAD_REQUEST);
    }

    await this.findByEmail(createdUser.email).then(foundUser => {
      if (foundUser !== null) {
        duplicate = foundUser.email === createdUser.email;
      }
    });

    if (!duplicate) {
      return await createdUser.save();
    } else {
      throw new HttpException('Duplicate user', HttpStatus.BAD_REQUEST);
    }
  }

  async update(userDto: UserDto) {
    if (userDto == null || userDto.name == null || userDto.name.length === 0
      || userDto.email == null || userDto.email.length === 0) {
      throw new HttpException('Invalid user model', HttpStatus.BAD_REQUEST);
    }

    let foundUser: User;
    await this.findByEmail(userDto.email).then(user => foundUser = user);

    if (foundUser == null) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    } else {
      await this.userModel.findOneAndUpdate({ email: foundUser.email}, userDto).exec();
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne()
      .where('email').equals(email)
      .exec();
  }
}