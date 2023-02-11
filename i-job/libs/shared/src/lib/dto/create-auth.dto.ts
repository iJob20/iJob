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

  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;

  set setPassword(hashedPassword: string) {
    this.password = hashedPassword;
  }
}
