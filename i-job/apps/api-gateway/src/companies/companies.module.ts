import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMPANIES_MICROSERVICE',
        options: {
          host: '0.0.0.0',
          port: process.env.COMPANIES_SERVICE_PORT || 3335,
        },
      },
    ]),
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
