import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Put,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { TagsService } from './tags.service';
import { CreateTagDto, DeleteTagDto, UpdateTagDto } from '@i-job/shared/dto';

@Controller('v1/tags')
@UseFilters(AllExceptionsFilter)
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('')
  @HttpCode(HttpStatus.OK)
  async createTag(@Body(ValidationPipe) createTagDto: CreateTagDto) {
    const tag = await this.tagsService.createTag(createTagDto);
    return tag;
  }

  @Delete('')
  @HttpCode(HttpStatus.OK)
  async deleteTag(@Body(ValidationPipe) deleteTagDto: DeleteTagDto) {
    return await this.tagsService.deleteTag(deleteTagDto);
  }

  @Put('')
  @HttpCode(HttpStatus.OK)
  async updateTag(@Body(ValidationPipe) updateTagDto: UpdateTagDto) {
    const tag = await this.tagsService.updateTag(updateTagDto);
    return tag;
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getTags() {
    const tags = await this.tagsService.getTags();
    return tags
  }
}
