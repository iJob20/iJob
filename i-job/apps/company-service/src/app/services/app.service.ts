import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from '@i-job/shared/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { companyRepository } from '../models/repo/company.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(companyRepository)
    private companyRepository: companyRepository
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto) {
    return await this.companyRepository.createCompanyEntity(createCompanyDto);
  }
}
