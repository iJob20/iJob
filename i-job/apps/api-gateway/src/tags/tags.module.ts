import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TAGS_MICROSERVICE',
        options: {
          host: '0.0.0.0',
          port: process.env.TAGS_SERVICE_PORT || 3337,
        },
      },
    ]),
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
