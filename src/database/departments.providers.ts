import { Connection } from 'mongoose';
import { DepartmentSchema } from './schemas/department.schema';

export const DepartmentsProviders = [
  {
    provide: 'DepartmentModelToken',
    useFactory: (connection: Connection) => connection.model('Department', DepartmentSchema),
    inject: ['DbConnectionToken'],
  },
];