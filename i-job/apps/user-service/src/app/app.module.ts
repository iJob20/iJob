import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { AppController } from './controllers/app.controller';
import { UserCV } from './models/cv.entity';
import { Education } from './models/education.entity';
import { Experience } from './models/experience.entity';
import { Project } from './models/projects.entity';
import { Skill } from './models/skills.entity';
import { UserStatus } from './models/user-status.entity';
import { User } from './models/user.entity';
import { UserRepository } from './models/user.repository';
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
        './models/user.entity.ts',
        './models/skills.entity.ts',
        './models/cv.entity.ts',
        './models/education.entity.ts',
        './models/experience.entity.ts',
        './models/projects.entity.ts',
        './models/user-status.entity.ts',
      ],
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TypeOrmModule.forFeature([
      User,
      Skill,
      Experience,
      Education,
      UserCV,
      Project,
      UserStatus,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, UserRepository],
})
export class AppModule {}
