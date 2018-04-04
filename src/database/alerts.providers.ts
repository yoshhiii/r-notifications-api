import { Connection } from 'mongoose';
import { AlertSchema } from './schemas/alert.schema';

export const AlertsProviders = [
  {
    provide: 'AlertModelToken',
    useFactory: (connection: Connection) => connection.model('Alert', AlertSchema),
    inject: ['DbConnectionToken'],
  },
];