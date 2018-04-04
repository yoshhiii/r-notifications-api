import { Controller, Get, Req } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';
import { User } from 'interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}