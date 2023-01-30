import { Injectable } from '@nestjs/common';
import { UserCreatedEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreation(userCreationEvent: UserCreatedEvent) {
    console.log(userCreationEvent);
  }
}
