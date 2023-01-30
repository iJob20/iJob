"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatedEvent = void 0;
class UserCreatedEvent {
    constructor(email, password, firstName, lastName, phoneNumber, userType) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.userType = userType;
    }
}
exports.UserCreatedEvent = UserCreatedEvent;
//# sourceMappingURL=create-user.event.js.map