import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Tag } from './models/tag.entity'
import { TagRepository } from './models/tags.repository';
import { AppController } from './controllers/app.controller';
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
        './models/tag.entity.ts',
      ],
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TypeOrmModule.forFeature([
      Tag
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, TagRepository],
})
export class AppModule {}

