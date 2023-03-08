export class SigninUserDto {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public role: string,
    public accessToken: string
  ) {}
}
