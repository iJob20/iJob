import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { TagRepository } from '../models/tags.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto, DeleteTagDto, UpdateTagDto } from '@i-job/shared/dto';
import {
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

  async deleteTag(deleteTagDto: DeleteTagDto) {
    const deletedTag = await this.tagRepository.deleteTag(deleteTagDto);
    if (deletedTag.affected == 0) {
      throw new BadRequestException();
    }
    return deletedTag;
  }

  async getTags() {
    const tags = await this.tagRepository.getTags();
    if (!tags) {
      throw new BadRequestException();
    }
    return tags;
  }

  async updateTag(updateTagDto: UpdateTagDto) {
    const updatedTag = await this.tagRepository.updateTag(updateTagDto);
    if (updatedTag.affected == 0) {
      throw new BadRequestException();
    }
    return updatedTag;
  }
}
