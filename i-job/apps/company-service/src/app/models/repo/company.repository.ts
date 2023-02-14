import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from '../company.entity';
import { CreateCompanyDto } from '@i-job/shared/company/dto';
import { empty } from 'rxjs';
@Injectable()
export class companyRepository extends Repository<Company> {
  constructor(repository: Repository<Company>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
  async createCompanyEntity(
    createCompanyDto: CreateCompanyDto
  ): Promise<Company> {
    const company = new Company();
    company.name = createCompanyDto.name;
    company.industry = createCompanyDto.industry;
    company.address = createCompanyDto.address;
    company.phone = createCompanyDto.phone;
    company.email = createCompanyDto.email;
    company.website = createCompanyDto.website;
    company.linkedin = createCompanyDto.linkedin;
    company.employees = createCompanyDto.employees;

    return await this.save(company);
  }
}
