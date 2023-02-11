import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { AppController } from './controllers/app.controller';
import { Skill } from './models/skills.entity';
import { User } from './models/user.entity';
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
      entities: ['./models/auth.entity.ts'],
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TypeOrmModule.forFeature([User, Skill]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
