import { Controller, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { CompanyService } from './company.service';

@Controller('v1/company')
@UseFilters(AllExceptionsFilter)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
}
