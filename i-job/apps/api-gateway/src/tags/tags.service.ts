import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTagDto, DeleteTagDto, UpdateTagDto } from '@i-job/shared/dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TagsService {
  constructor(
    @Inject('TAGS_MICROSERVICE') private readonly tagsClient: ClientProxy
  ) {}

  async createTag(createTagDto: CreateTagDto) {
    return await firstValueFrom(
      this.tagsClient.send('create-tag', createTagDto)
    );
  }

  async deleteTag(deleteTagDto: DeleteTagDto) {
    return await firstValueFrom(this.tagsClient.send('delete-tag', deleteTagDto));
  }

  async getTags() {
    return await this.tagsClient.send('get-tags', 'get');
  }
  async updateTag(updateTagDto: UpdateTagDto) {
    console.log(updateTagDto)
    return await firstValueFrom(this.tagsClient.send('update-tag', updateTagDto));
  }
}
