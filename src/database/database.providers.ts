import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://ranchdressing2:hackathon2018@ds042607.mlab.com:42607/reliasalerts', {
      });
    },
  },
];