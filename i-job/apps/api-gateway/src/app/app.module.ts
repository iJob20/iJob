import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CompaniesModule } from '../companies/companies.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
