import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersProviders } from '../database/users.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  components: [
    UsersService,
    ...UsersProviders,
  ],
  exports: [UsersService],
})
export class UsersModule {}