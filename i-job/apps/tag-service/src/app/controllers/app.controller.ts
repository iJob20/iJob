import { Controller, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from '../services/app.service';
import { CreateTagDto, DeleteTagDto, UpdateTagDto } from '@i-job/shared/dto';

@Controller()
@UseFilters(AllExceptionsFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-tag')
  async createTag(@Payload() createTagDto: CreateTagDto) {
    return await this.appService.createTag(createTagDto);
  }

  @MessagePattern('update-tag')
  async updateTag(@Payload() updateTagDto: UpdateTagDto) {
    return await this.appService.updateTag(updateTagDto);
  }

  @MessagePattern('delete-tag')
  async deleteTag(@Payload() deleteTagDto: DeleteTagDto) {
    return await this.appService.deleteTag(deleteTagDto);
  }
}
