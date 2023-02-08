import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService } from '../services/app.service';
import { CreateAuthDto } from '@i-job/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-auth')
  async createUser(createAuthDto: CreateAuthDto) {
    try {
      return await this.appService.save(createAuthDto);
    } catch (err) {
      return err;
    }
  }
}
