import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { TagRepository } from '../models/tags.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto, UpdateTagDto } from '@i-job/shared/dto';
import {
  BaseResponse,
  ErrorResponse,
  SuccessResponse,
} from 'libs/shared/src/lib/api/responses';
import { CreateTagResponse } from '../interfaces/dto/create-tag.response';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TagRepository) private tagRepository: TagRepository
  ) {}

  async createTag(createTagDto: CreateTagDto) {
    const createdTag = await this.tagRepository.createTag(createTagDto);
    if (!createdTag) {
      throw new BadRequestException();
    }
    return new SuccessResponse(
      new CreateTagResponse(createdTag),
      HttpStatus.CREATED
    );
  }

  async deleteTag(title: string) {
    const tag = this.tagRepository.deleteTag(title);
    if (!tag) {
      throw new BadRequestException();
    }
    return tag;
  }

  async updateTag(updateTagDto: UpdateTagDto) {
    const tag = this.tagRepository.updateTag(updateTagDto);
    if (!tag) {
      throw new BadRequestException();
    }
    return tag;
  }
}
