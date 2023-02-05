import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from '@ijob/shared/dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy
  ) {}

  createUser(createUserDto: CreateUserDto) {
    return this.authClient.send('create-user', JSON.stringify(createUserDto));
  }
}
