import {
  Body,
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Post,
  UseFilters,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAuthUserDto, CreateUserDto } from '@i-job/shared/dto';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { AuthService } from './auth.service';
import { UserService } from '../users/user.service';
import { SignupUserDto } from '../../../../libs/shared/src/lib/dto/signup-user.dto';

@Controller('v1/auth')
@UseFilters(AllExceptionsFilter)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post('users/signup')
  async createUser(@Body(ValidationPipe) createAuthUserDto: CreateAuthUserDto) {
    const authResponse = await this.authService.createAuth(createAuthUserDto);
    if (authResponse.status !== HttpStatus.CREATED) {
      // throw error based on response from microservice
    }
    const { auth, token } = authResponse;
    const signupUserDto = new SignupUserDto(
      createAuthUserDto.email,
      createAuthUserDto.firstName,
      createAuthUserDto.lastName,
      createAuthUserDto.phoneNumber,
      createAuthUserDto.type,
      token,
      auth.id
    );
    const userResponse = await this.userService.createUser(signupUserDto);

    if (userResponse.status !== HttpStatus.CREATED) {
      // send event to auth service to delete the auth account and throw error
    }

    return new SignupUserDto(
      auth.email,
      createAuthUserDto.firstName,
      createAuthUserDto.lastName,
      createAuthUserDto.phoneNumber,
      auth.type,
      token,
      auth.id
    );
  }
}
