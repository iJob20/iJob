/* eslint-disable no-useless-catch */
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  CreateAuthUserDto,
  CreateCompanyDto,
  LoginAuthDto,
} from '@i-job/shared/dto';
import { first, firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy
  ) {}

  async signinUser(signinUserDto: LoginAuthDto) {
    try {
      return await firstValueFrom(
        this.authClient.send('login-auth', signinUserDto)
      );
    } catch (err) {
      throw err;
    }
  }

  async createUserAuth(createUserAuthDto: CreateAuthUserDto) {
    try {
      return await firstValueFrom(
        this.authClient.send('create-user-auth', createUserAuthDto)
      );
    } catch (err) {
      throw err;
    }
  }

  async createCompanyAuth(createCompanyDto: CreateCompanyDto) {
    try {
      return await firstValueFrom(
        this.authClient.send('create-company-auth', createCompanyDto)
      );
    } catch (err) {
      throw err;
    }
  }
}
