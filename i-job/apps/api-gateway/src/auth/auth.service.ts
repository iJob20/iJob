import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAuthDto } from '@i-job/shared/dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy
  ) {}

  async createUser(createUserDto: CreateAuthDto) {
    return await firstValueFrom(
      this.authClient.send('create-auth', createUserDto)
    );
  }
}
