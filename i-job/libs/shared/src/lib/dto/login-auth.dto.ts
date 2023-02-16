import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserType } from '../types';
export class LoginAuthUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  type: UserType;
}
