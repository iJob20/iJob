export class UserCreatedEvent {
    constructor(
        public readonly email: string,
        public readonly password: string,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phoneNumber: number,
        public readonly userType: string,
    ) { }

    toString() {
        return JSON.stringify({
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            userType: this.userType 
        })
    }
}