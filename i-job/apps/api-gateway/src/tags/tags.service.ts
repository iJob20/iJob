import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateTagDto } from '@i-job/shared/dto'
import { firstValueFrom } from "rxjs";

@Injectable()
export class TagsService {
  constructor(
    @Inject('TAGS_MICROSERVICE') private readonly tagsClient: ClientProxy
  ) {}

  async createTag(createTagDto: CreateTagDto) {
    console.log(createTagDto)
    return await firstValueFrom(
      this.tagsClient.send('create-tag', createTagDto)
    );
  }

  async deleteTag(tagTitle: string) {
    return await firstValueFrom(
      this.tagsClient.send('delete-tag', tagTitle)
    );
  }

  async updateTag(tagTitle: string,) {
    return await firstValueFrom (
      this.tagsClient.send('update-tag', tagTitle)
    );
  }
}