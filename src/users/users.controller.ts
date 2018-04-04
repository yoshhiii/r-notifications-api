import { Controller, Get, Post, Put, Body, Query, Req, HttpCode } from '@nestjs/common';
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

  @Get('email')
  async findByEmail(@Query('email') email): Promise<User> {
    return this.usersService.findByEmail(email);
  }

  @Post()
  async create(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.create(userDto);
  }

  @Put()
  async update(@Body() userDto: UserDto) {
    return this.usersService.update(userDto);
  }
}