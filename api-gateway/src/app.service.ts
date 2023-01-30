import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { UserCreatedEvent } from './create-user.event';

@Injectable()
export class AppService {
  constructor(@Inject('AUTH_SERVICE') private readonly authClient: ClientKafka) { }
  
  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) { 
    this.authClient.emit('user_created', new UserCreatedEvent(
        createUserRequest.email,
        createUserRequest.password,
        createUserRequest.firstName,
        createUserRequest.lastName,
        createUserRequest.phoneNumber,
        createUserRequest.userType
      )
    );
  }
}
