export declare class UserCreatedEvent {
    readonly email: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly phoneNumber: number;
    readonly userType: string;
    constructor(email: string, password: string, firstName: string, lastName: string, phoneNumber: number, userType: string);
}
