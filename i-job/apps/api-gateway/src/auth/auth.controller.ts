import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateAuthDto } from '@i-job/shared/dto';

import { AuthService } from './auth.service';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async createUser(@Body(ValidationPipe) createAuthDto: CreateAuthDto) {
    const authResponse = await this.authService.createUser(createAuthDto);
    console.log(authResponse);
  }
}
