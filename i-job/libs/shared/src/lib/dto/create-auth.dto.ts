import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserType } from '../types';
export class CreateAuthUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  type: UserType;

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
