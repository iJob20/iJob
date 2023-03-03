import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Companies } from '../company.entity';
import { CreateCompanyDto } from '@i-job/shared/dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompanyRepository extends Repository<Companies> {
  constructor(@InjectRepository(Companies) repository: Repository<Companies>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
  async createCompanyEntity(
    createCompanyDto: CreateCompanyDto
  ): Promise<Companies> {
    const company = new Companies();
    company.name = createCompanyDto.name;
    company.industry = createCompanyDto.industry;
    company.address = createCompanyDto.address;
    company.phone = createCompanyDto.phone;
    company.email = createCompanyDto.email;
    company.website = createCompanyDto.website;
    company.linkedin = createCompanyDto.linkedin;
    company.employees = createCompanyDto.employees;
    company.authId = createCompanyDto.authId;

    return await this.save(company);
  }
}
