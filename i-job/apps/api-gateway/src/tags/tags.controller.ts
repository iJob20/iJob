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
  BadRequestException,
} from '@nestjs/common';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { TagsService } from './tags.service';
import { CreateTagDto, DeleteTagDto, UpdateTagDto } from '@i-job/shared/dto';

@Controller('v1/tags')
@UseFilters(AllExceptionsFilter)
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createTag(@Body(ValidationPipe) createTagDto: CreateTagDto) {
    const tagsResponse = await this.tagsService.createTag(createTagDto);
    if (tagsResponse.status != HttpStatus.CREATED) {
      throw new BadRequestException(tagsResponse.message)
    }
    return tagsResponse;
  }

  @Delete('')
  @HttpCode(HttpStatus.OK)
  async deleteTag(@Body(ValidationPipe) deleteTagDto: DeleteTagDto) {
    const tagsResponse = await this.tagsService.deleteTag(deleteTagDto);
    if (tagsResponse.status != HttpStatus.OK) {
      throw new BadRequestException(tagsResponse.message)
    }
    return tagsResponse;
  }

  @Put('')
  @HttpCode(HttpStatus.OK)
  async updateTag(@Body(ValidationPipe) updateTagDto: UpdateTagDto) {
    const tagsResponse = await this.tagsService.updateTag(updateTagDto);
    if (tagsResponse.status != HttpStatus.OK) {
      throw new BadRequestException(tagsResponse.message)
    }
    return tagsResponse;
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getTags() {
    const tags = await this.tagsService.getTags();
    return tags
  }
}
