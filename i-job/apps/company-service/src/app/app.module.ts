import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { AppController } from './controllers/app.controller';
import { Companies } from './models/company.entity';
import { Jobs } from './models/jobs.entity';
import { Recruiters } from './models/recruiter.entity';
import { CompanyRepository } from './models/repo/company.repository';
import { AppService } from './services/app.service';

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
      entities: [
        './models/company.entity.ts',
        './models/jobs.entity.ts',
        './models/recruiter.entity.ts',
      ],
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TypeOrmModule.forFeature([Companies, Recruiters, Jobs]),
  ],
  controllers: [AppController],
  providers: [AppService, CompanyRepository],
})
export class AppModule {}
