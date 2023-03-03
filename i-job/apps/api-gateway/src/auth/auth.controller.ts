import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
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
import { SignupUserDto } from '@i-job/shared/dto';

@Controller('v1/auth')
@UseFilters(AllExceptionsFilter)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post('users/signin')
  @HttpCode(HttpStatus.OK)
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
      authResponse.data.auth.role,
      authResponse.data.accessToken
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
      createAuthUserDto.role,
      data.accessToken,
      data.auth.id
    );

    const userResponse = await this.userService.createUser(signupUserDto);
    if (userResponse.status !== HttpStatus.CREATED) {
      throw new BadRequestException(authResponse.message);
    }

    return signupUserDto;
  }

  @Post('company/signin')
  @HttpCode(HttpStatus.OK)
  async signinCompany(@Body(ValidationPipe) signinUserDto: LoginAuthUserDto) {
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
      authResponse.data.auth.role,
      authResponse.data.accessToken
    );
  }

  @Post('company/signup')
  async createCompany(
    @Body(ValidationPipe) createAuthUserDto: CreateAuthUserDto
  ) {
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
      createAuthUserDto.role,
      data.accessToken,
      data.auth.id
    );

    const userResponse = await this.userService.createUser(signupUserDto);
    if (userResponse.status !== HttpStatus.CREATED) {
      throw new BadRequestException(authResponse.message);
    }

    return signupUserDto;
  }
}
