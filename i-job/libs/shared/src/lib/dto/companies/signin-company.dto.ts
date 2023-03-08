export class SigninCompanyDto {
  constructor(
    public email: string,
    public name: string,
    public industry: string,
    public employees: number,
    public address: string,
    public phoneNumber: string,
    public website: string,
    public linkedin: string,
    public role: string,
    public accessToken: string
  ) {}
}
