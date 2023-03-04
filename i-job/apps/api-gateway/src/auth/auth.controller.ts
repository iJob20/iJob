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
  CreateCompanyDto,
  LoginAuthDto,
  SigninCompanyDto,
  SigninUserDto,
} from '@i-job/shared/dto';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { AuthService } from './auth.service';
import { UserService } from '../users/user.service';
import { SignupUserDto } from '@i-job/shared/dto';
import { CompanyService } from '../company/company.service';

@Controller('v1/auth')
@UseFilters(AllExceptionsFilter)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly companyService: CompanyService
  ) {}

  @Post('users/signin')
  @HttpCode(HttpStatus.OK)
  async signinUser(@Body(ValidationPipe) signinUserDto: LoginAuthDto) {
    const authResponse = await this.authService.signinUser(signinUserDto);
    if (authResponse.status !== HttpStatus.OK) {
      throw new BadRequestException('Unable to login user');
    }
    const userResponse = await this.userService.getUserByEmail(
      signinUserDto.email
    );
    if (userResponse.status !== HttpStatus.OK) {
      throw new BadRequestException('Unable to login user');
    }
    return new SigninUserDto(
      userResponse.data.email,
      userResponse.data.firstName,
      userResponse.data.lastName,
      userResponse.data.phoneNumber,
      authResponse.data.auth.role,
      authResponse.data.accessToken
    );
  }

  @Post('users/signup')
  async createUser(@Body(ValidationPipe) createAuthUserDto: CreateAuthUserDto) {
    const authResponse = await this.authService.createUserAuth(
      createAuthUserDto
    );
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
  async signinCompany(@Body(ValidationPipe) signinDto: LoginAuthDto) {
    const authResponse = await this.authService.signinUser(signinDto);
    if (authResponse.status !== HttpStatus.OK) {
      throw new BadRequestException('Unable to login company');
    }
    const companyResponse = await this.companyService.getCompanyByEmail(
      signinDto.email
    );
    console.log('companyResponse: ', companyResponse);

    if (companyResponse.status !== HttpStatus.OK) {
      throw new BadRequestException('Unable to login company');
    }
    return new SigninCompanyDto(
      companyResponse.data.email,
      companyResponse.data.name,
      companyResponse.data.industry,
      companyResponse.data.employees,
      companyResponse.data.address,
      companyResponse.data.phoneNumber,
      companyResponse.data.website,
      companyResponse.data.linkedin,
      authResponse.data.auth.role,
      authResponse.data.accessToken
    );
  }

  @Post('company/signup')
  async createCompany(
    @Body(ValidationPipe) createAuthCompanyDto: CreateCompanyDto
  ) {
    const authResponse = await this.authService.createCompanyAuth(
      createAuthCompanyDto
    );
    if (authResponse.status !== HttpStatus.CREATED) {
      throw new BadRequestException(authResponse.message);
    }
    const { data } = authResponse;
    const company = createAuthCompanyDto;
    company.authId = data.auth.id;

    const companyResponse = await this.companyService.createCompany(company);
    if (companyResponse.status !== HttpStatus.CREATED) {
      throw new BadRequestException(authResponse.message);
    }

    return company;
  }
}
