import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';
import { CreateUserDto } from '@ijob/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'create-user' })
  createUser(@Payload('userDto', ValidationPipe) userDto: CreateUserDto) {
    return 'response from auth ms: ' + userDto;
    return this.appService.getData();
  }
}
