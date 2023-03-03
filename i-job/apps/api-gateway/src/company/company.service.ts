import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAuthUserDto } from '@i-job/shared/dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_MICROSERVICE') private readonly companyClient: ClientProxy
  ) {}

  async createUser(createUserDto) {
    return await firstValueFrom(
      this.companyClient.send('create-user', createUserDto)
    );
  }

  async getUserByEmail(email: string) {
    return await firstValueFrom(this.companyClient.send('get-user', email));
  }
}
