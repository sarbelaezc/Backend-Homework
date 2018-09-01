import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers :[
    AppController
  ],
  imports: [
    MongooseModule.forRoot('mongodb://<admin>:<admin18>@ds233212.mlab.com:33212/noteschallenge')
  ],
})
export class AppModule {}
