import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Req,
  UseFilters,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { CompaniesService } from './companies.service';
import { RolesGuard } from '@i-job/shared/guards';
import { Roles } from '@i-job/shared/decorators';
import { Role } from '@i-job/shared/enums';
import { CreateJobDto } from '@i-job/shared/dto';

@Controller('v1/companies')
@UseFilters(AllExceptionsFilter)
export class CompaniesController {
  constructor(private readonly companyService: CompaniesService) {}

  @Post('job')
  @Roles(Role.Company)
  @UseGuards(RolesGuard)
  async createNewJob(@Req() req) {
    const company = await this.companyService.getCompanyByEmail(req.email);
    if (!company || company.data.id !== req.body.companyId) {
      throw new BadRequestException('Error in creating a new job');
    }
    return company;
  }
}
