import { Controller, Get } from '@nestjs/common';
@Controller('')
export class AppController{
  @Get('')
  public async healthCheck(){
    return {message: "I'm ok"};
  }
}
