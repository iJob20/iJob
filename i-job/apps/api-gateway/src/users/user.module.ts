import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ClientsModule.register([
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
  controllers: [UserController],
  providers: [UserService],
})
export class AuthModule {}
