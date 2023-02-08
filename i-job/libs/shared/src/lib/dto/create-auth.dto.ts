import { IsNotEmpty, IsString } from 'class-validator';
import { UserType } from '../types';
export class CreateAuthDto {
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
