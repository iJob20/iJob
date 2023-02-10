import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { Auth } from './models/auth.entity';
import { AuthRepository } from './models/auth.repository';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '@i-job/shared/filters';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dev-db.cwxojc0bqkwg.eu-central-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'Ijob12345Ijob',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
      retryAttempts: 10,
      entities: ['./models/auth.entity.ts'],
    }),
    TypeOrmModule.forFeature([Auth]),
  ],
  controllers: [AppController],
  providers: [AppService, AuthRepository],
})
export class AppModule {}
