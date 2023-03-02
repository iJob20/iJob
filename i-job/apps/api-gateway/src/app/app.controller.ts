import { Jwt } from '@i-job/shared/auth';
import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getData(@Query() token: string) {
    return Jwt.verifyToken(token);
  }
}
