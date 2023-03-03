import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Role } from '../enums';
export class CreateCompanyDto {
  public _authId;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  industry: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  website: string;

  @IsString()
  linkedin: string;

  @IsNumber()
  employees: number;

  @IsString()
  @IsNotEmpty()
  role: Role;

  set authId(id: string) {
    this._authId = id;
  }

  set hashedPassword(hashedPassword: string) {
    this.password = hashedPassword;
  }
}
