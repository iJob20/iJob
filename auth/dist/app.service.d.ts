import { UserCreatedEvent } from './create-user.event';
export declare class AppService {
    getHello(): string;
    handleUserCreation(userCreationEvent: UserCreatedEvent): void;
}
