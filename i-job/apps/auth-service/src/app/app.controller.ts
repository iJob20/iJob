import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';
import { CreateUserDto } from '@ijob/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-user')
  createUser(@Payload() userDto: CreateUserDto) {
    return 'response from auth ms: ' + userDto;
  }
}
