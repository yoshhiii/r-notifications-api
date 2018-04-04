import { Controller, Get, Post, Body, Req, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'interfaces/user.interface';
import { UserDto } from 'dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.create(userDto);
  }
}