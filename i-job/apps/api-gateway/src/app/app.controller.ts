import { Jwt } from '@i-job/shared/auth';
import { Role } from '@i-job/shared/enums';
import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { Roles } from '@i-job/shared/decorators';

import { AppService } from './app.service';
import { AuthorizationGuard, RolesGuard } from '@i-job/shared/guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  getData(@Query() query, @Req() req) {
    return console.log(req.userEmail);
  }
}
