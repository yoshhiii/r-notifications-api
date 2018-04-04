import { Module } from '@nestjs/common';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { DepartmentsProviders } from '../database/departments.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentsController],
  components: [
    DepartmentsService,
    ...DepartmentsProviders,
  ],
})
export class DepartmentsModule {}