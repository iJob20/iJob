import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_MICROSERVICE') private readonly userClient: ClientProxy
  ) {}

  async createUser(createUserDto) {
    return await firstValueFrom(
      this.userClient.send('create-user', createUserDto)
    );
  }

  async getUserByEmail(email: string) {
    return await firstValueFrom(this.userClient.send('get-user', email));
  }
}
