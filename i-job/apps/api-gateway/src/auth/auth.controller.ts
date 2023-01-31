import { Controller, Get } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}