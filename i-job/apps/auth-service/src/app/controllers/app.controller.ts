import { Controller, UseFilters, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateAuthUserDto, LoginAuthUserDto } from '@i-job/shared/dto';
import { AppService } from '../services/app.service';
import { AllExceptionsFilter } from '@i-job/shared/filters';

@Controller()
@UseFilters(AllExceptionsFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('login-auth')
  async loginAuth(@Payload(ValidationPipe) signinUserDto: LoginAuthUserDto) {
    return await this.appService.signin(signinUserDto);
  }

  @MessagePattern('create-auth')
  async createUser(@Payload(ValidationPipe) createAuthDto: CreateAuthUserDto) {
    return await this.appService.save(createAuthDto);
  }
}
