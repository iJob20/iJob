import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAuthUserDto } from '@i-job/shared/dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy,
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientProxy
  ) {}

  async createAuth(createUserAuthDto: CreateAuthUserDto) {
    return await firstValueFrom(
      this.authClient.send('create-auth', createUserAuthDto)
    );
  }
}
