import * as mongoose from 'mongoose';
// import { DB_PROVIDER } from '../constants';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds141972.mlab.com:41972/backend-homework');
        },
    },
];
