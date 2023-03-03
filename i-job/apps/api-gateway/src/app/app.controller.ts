import { Jwt } from '@i-job/shared/auth';
import { Role } from '@i-job/shared/enums';
import { Controller, Get, Query } from '@nestjs/common';
import { Roles } from '@i-job/shared/decorators';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  @Roles(Role.Admin)
  getData(@Query() query) {
    console.log(query.token);
    return Jwt.verifyToken(query.token);
  }
}
