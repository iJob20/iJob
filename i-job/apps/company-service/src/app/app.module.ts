import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    TypeOrmModule.forFeature([]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
