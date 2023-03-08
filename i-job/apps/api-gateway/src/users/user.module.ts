import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_MICROSERVICE',
        options: {
          host: '0.0.0.0',
          port: process.env.USERS_SERVICE_PORT || 3336,
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AuthModule {}
