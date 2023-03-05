import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTagDto {
  @IsString()
  @IsNotEmpty()
  new_title: string;
  tag_title_to_update: string;
}