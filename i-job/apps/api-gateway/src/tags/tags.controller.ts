import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { TagsService } from './tags.service';
import { CreateTagDto, DeleteTagDto } from '@i-job/shared/dto';

@Controller('v1/tags')
@UseFilters(AllExceptionsFilter)
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  async createTag(@Body(ValidationPipe) createTagDto: CreateTagDto) {
    const tag = await this.tagsService.createTag(createTagDto);
    return tag;
  }

  @Delete('delete')
  @HttpCode(HttpStatus.OK)
  async deleteTag(@Body(ValidationPipe) deleteTagDto: DeleteTagDto) {
    return await this.tagsService.deleteTag(deleteTagDto);
  }
}
