import { UserType } from '@i-job/shared/types';

export class SignupUserDto {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: number,
    public type: UserType,
    public token: string,
    public authId: string
  ) {}
}
