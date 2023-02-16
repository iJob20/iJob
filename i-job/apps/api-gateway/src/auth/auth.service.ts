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
    return await firstValueFrom(
      this.authClient.send('login-auth', signinUserDto)
    );
  }

  async createAuth(createUserAuthDto: CreateAuthUserDto) {
    return await firstValueFrom(
      this.authClient.send('create-auth', createUserAuthDto)
    );
  }
}
