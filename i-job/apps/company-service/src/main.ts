/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  TcpOptions,
  Transport,
} from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const port = process.env.COMPANIES_SERVICE_PORT || 3335;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port,
      },
    } as TcpOptions
  );
  Logger.log(`Company MicroService running on port ${port}`);
  app.listen();
}

bootstrap();
