import { Module } from '@nestjs/common';

@Module({
  controllers :[
    AppController
  ],
  imports: [
    MongooseModule.forRoot('mongodb://<admin>:<admin18>@ds233212.mlab.com:33212/noteschallenge')
  ],
})
export class AppModule {}
