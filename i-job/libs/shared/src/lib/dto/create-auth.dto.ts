import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../enums';
export class CreateAuthUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  role: Role;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  set hashedPassword(hashedPassword: string) {
    this.password = hashedPassword;
  }
}
