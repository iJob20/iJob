import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMPANY_MICROSERVICE',
        options: {
          host: '0.0.0.0',
          port: process.env.COMPANIES_SERVICE_PORT || 3335,
        },
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class AuthModule {}
