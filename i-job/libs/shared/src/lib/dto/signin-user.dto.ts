import { UserType } from '@i-job/shared/types';

export class SigninUserDto {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public type: string,
    public token: string
  ) {}
}