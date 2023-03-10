import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCompanyDto } from '@i-job/shared/dto';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-company')
  async createCompany(createCompanyDto: CreateCompanyDto) {
    return await this.appService.createCompany(createCompanyDto);
  }

  @MessagePattern('get-company')
  async getCompanyByEmail(email: string) {
    return await this.appService.getCompanyByEmail(email);
  }
}
