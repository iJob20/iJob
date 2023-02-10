import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAuthDto } from '@i-job/shared/dto';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { AuthService } from './auth.service';

@Controller('v1/auth')
@UseFilters(AllExceptionsFilter)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async createUser(@Body(ValidationPipe) createAuthDto: CreateAuthDto) {
    const authResponse = await this.authService.createUser(createAuthDto);
    // send the needed data to user service to create a user.
    return;
  }
}
