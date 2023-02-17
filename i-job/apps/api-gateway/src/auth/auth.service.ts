/* eslint-disable no-useless-catch */
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAuthUserDto, LoginAuthUserDto } from '@i-job/shared/dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy
  ) {}

  async signinUser(signinUserDto: LoginAuthUserDto) {
    try {
      return await firstValueFrom(
        this.authClient.send('login-auth', signinUserDto)
      );
    } catch (err) {
      throw err;
    }
  }

  async createAuth(createUserAuthDto: CreateAuthUserDto) {
    try {
      return await firstValueFrom(
        this.authClient.send('create-auth', createUserAuthDto)
      );
    } catch (err) {
      throw err;
    }
  }
}
