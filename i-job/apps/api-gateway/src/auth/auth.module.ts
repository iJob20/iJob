import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserService } from '../users/user.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: process.env.AUTH_SERVICE_PORT || 3334,
        },
      },
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: process.env.USER_SERVICE_PORT || 3336,
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
