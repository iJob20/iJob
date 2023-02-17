import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateAuthUserDto,
  LoginAuthUserDto,
  SigninUserDto,
} from '@i-job/shared/dto';
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

  @Post('users/signin')
  async signinUser(@Body(ValidationPipe) signinUserDto: LoginAuthUserDto) {
    const authResponse = await this.authService.signinUser(signinUserDto);
    if (authResponse.status !== HttpStatus.OK) {
      // throw error based on response from microservice
    }
    const userResponse = await this.userService.getUserByEmail(
      signinUserDto.email
    );
    if (userResponse.status !== HttpStatus.OK) {
      // throw error based on response from microservice
    }
    return new SigninUserDto(
      userResponse.email,
      userResponse.firstName,
      userResponse.lastName,
      userResponse.phoneNumber,
      userResponse.type,
      authResponse.token
    );
  }

  @Post('users/signup')
  async createUser(@Body(ValidationPipe) createAuthUserDto: CreateAuthUserDto) {
    const authResponse = await this.authService.createAuth(createAuthUserDto);
    if (authResponse.status !== HttpStatus.CREATED) {
      throw new BadRequestException(authResponse.message);
    }
    const { data } = authResponse;
    const signupUserDto = new SignupUserDto(
      createAuthUserDto.email,
      createAuthUserDto.firstName,
      createAuthUserDto.lastName,
      createAuthUserDto.phoneNumber,
      createAuthUserDto.type,
      data.token,
      data.auth.id
    );

    const userResponse = await this.userService.createUser(signupUserDto);
    if (userResponse.status !== HttpStatus.CREATED) {
      throw new BadRequestException(authResponse.message);
    }

    return new SignupUserDto(
      data.auth.email,
      createAuthUserDto.firstName,
      createAuthUserDto.lastName,
      createAuthUserDto.phoneNumber,
      data.auth.type,
      data.token,
      data.auth.id
    );
  }
}
