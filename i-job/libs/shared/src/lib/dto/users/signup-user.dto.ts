export class SignupUserDto {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public role: string,
    public accessToken: string,
    public authId: string
  ) {}
}
