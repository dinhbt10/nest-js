import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getHello() {
    const message = this.appService.getHello();
    return { message };
  }
}
