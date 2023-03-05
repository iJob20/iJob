import { Controller, UseFilters, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from '@i-job/shared/filters'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { AppService } from '../services/app.service';
import { CreateTagDto, UpdateTagDto } from '@i-job/shared/dto'


@Controller()
@UseFilters(AllExceptionsFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-tag')
  async createTag(@Payload(ValidationPipe) createTagDto: CreateTagDto ) {
    console.log('app_ms')
    return await this.appService.createTag(createTagDto);
  }

  @MessagePattern('update-tag')
  async updateTag(@Payload(ValidationPipe) updateTagDto: UpdateTagDto ) {
    return await this.appService.updateTag(updateTagDto);
  }

  @MessagePattern('delete-tag')
  async deleteTag(@Payload(ValidationPipe) title:string ) {
    return await this.appService.deleteTag(title)
  }
}

