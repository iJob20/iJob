import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from '@i-job/shared/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRepository } from '../models/repo/companies.repository';
import {
  ErrorResponse,
  SuccessResponse,
} from 'libs/shared/src/lib/api/responses';
import { CreateCompanyResponse } from '../interfaces/create-company.response';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CompanyRepository)
    private companyRepository: CompanyRepository
  ) {}

  async getCompanyByEmail(email: string) {
    const company = await this.companyRepository.findByEmail(email);
    if (!company) {
      throw new BadRequestException('Unable to find company');
    }
    return new SuccessResponse(company, HttpStatus.OK);
  }

  async createCompany(createCompanyDto: CreateCompanyDto) {
    const createdCompany = await this.companyRepository.createCompanyEntity(
      createCompanyDto
    );
    if (!createdCompany) {
      return new ErrorResponse(
        HttpStatus.BAD_REQUEST,
        'Error registering user',
        new Date().toISOString()
      );
    }
    return new SuccessResponse(
      new CreateCompanyResponse(createdCompany),
      HttpStatus.CREATED
    );
  }
}
