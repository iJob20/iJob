export class SignupUserDto {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public type: string,
    public accessToken: string,
    public authId: string
  ) {}
}
