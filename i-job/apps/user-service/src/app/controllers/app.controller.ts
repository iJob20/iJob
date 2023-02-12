import { Controller, UseFilters, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { SignupUserDto } from '@i-job/shared/dto';
import { AppService } from '../services/app.service';

@Controller()
@UseFilters(AllExceptionsFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-user')
  async createUser(@Payload() createUserDto: SignupUserDto) {
    console.log(createUserDto);
    return await this.appService.createUser(createUserDto);
  }
}
