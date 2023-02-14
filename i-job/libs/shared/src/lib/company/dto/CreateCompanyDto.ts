import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateCompanyDto {
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
  website: string;

  @IsString()
  linkedin: string;

  @IsNumber()
  employees: number;
}
