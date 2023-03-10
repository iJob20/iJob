import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CompaniesService } from '../companies/companies.service';
import { UserService } from '../users/user.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        options: {
          host: '0.0.0.0',
          port: process.env.AUTH_SERVICE_PORT || 3334,
        },
      },
      {
        name: 'USERS_MICROSERVICE',
        options: {
          host: '0.0.0.0',
          port: process.env.USERS_SERVICE_PORT || 3336,
        },
      },
      {
        name: 'COMPANIES_MICROSERVICE',
        options: {
          host: '0.0.0.0',
          port: process.env.COMPANIES_SERVICE_PORT || 3335,
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, CompaniesService],
})
export class AuthModule {}
