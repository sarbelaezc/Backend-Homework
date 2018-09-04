import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../constants';

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect('mongodb://admin:admin123@ds141972.mlab.com:41972/backend-homework',{ useNewUrlParser: true }),
  },
];
