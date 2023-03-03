import { Jwt } from '@i-job/shared/auth';
import { Role } from '@i-job/shared/enums';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { Roles } from '@i-job/shared/decorators';

import { AppService } from './app.service';
import { RolesGuard } from '@i-job/shared/guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  getData(@Query() query) {
    return Jwt.verifyToken(query.authorization);
  }
}
