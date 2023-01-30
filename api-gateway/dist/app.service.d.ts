import { ClientKafka } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
export declare class AppService {
    private readonly authClient;
    constructor(authClient: ClientKafka);
    getHello(): string;
    createUser(createUserRequest: CreateUserRequest): void;
}
