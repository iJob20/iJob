import { CreateTagDto, DeleteTagDto, UpdateTagDto } from '@i-job/shared/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagRepository extends Repository<Tag> {
  constructor(
    @InjectRepository(Tag)
    repository: Repository<Tag>
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async createTag(createTagDto: CreateTagDto): Promise<Tag> {
    const tag = new Tag();
    tag.title = createTagDto.title;

    return await this.save(tag);
  }

  async getTags() {
    return await this.find()
  }
  
  async deleteTag(deleteTagDto: DeleteTagDto): Promise<DeleteResult> {
    return await this.delete({ title: deleteTagDto.title });
      }

  async updateTag(updateTagDto: UpdateTagDto): Promise<UpdateResult> {
    return await this.update(
      { title: updateTagDto.tag_title_to_update },
      { title: updateTagDto.new_title, updatedAt: new Date() }
    );
  }
}
