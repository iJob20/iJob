import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Role } from '../enums';
export class LoginAuthUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
