import { CreateUserDto } from '@ijob/shared/dto';
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('signup')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }
}
