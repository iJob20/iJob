import { Controller, UseFilters, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateAuthDto } from '@i-job/shared/dto';
import { AppService } from '../services/app.service';
import { AllExceptionsFilter } from '@i-job/shared/filters';

@Controller()
@UseFilters(AllExceptionsFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-auth')
  async createUser(@Payload(ValidationPipe) createAuthDto: CreateAuthDto) {
    return await this.appService.save(createAuthDto);
  }
}
