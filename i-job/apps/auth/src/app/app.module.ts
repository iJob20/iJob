import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthEntity } from './auth.entity';
import { AuthRepository } from './auth.repository';
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
    }),
    TypeOrmModule.forFeature([AuthRepository, AuthEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
