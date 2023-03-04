import { CreateCompanyDto } from '@i-job/shared/dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANIES_MICROSERVICE')
    private readonly companyClient: ClientProxy
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto) {
    return await firstValueFrom(
      this.companyClient.send('create-company', createCompanyDto)
    );
  }

  async getCompanyByEmail(email: string) {
    return await firstValueFrom(this.companyClient.send('get-company', email));
  }
}
