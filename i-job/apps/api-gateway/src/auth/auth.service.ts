import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from '@ijob/shared/dto';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka
  ) {}

  createUser(createUserDto: CreateUserDto) {
    this.authClient
      .send('create-user', JSON.stringify(createUserDto))
      .subscribe((user) => {
        console.log(user);
        return user;
      });
    return 'ok';
  }

  async onModuleInit() {
    this.authClient.subscribeToResponseOf('create-user');
    await this.authClient.connect();
  }

  onModuleDestroy() {
    this.authClient.close();
  }
}
