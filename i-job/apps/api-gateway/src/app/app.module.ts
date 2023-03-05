import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { TagsModule } from '../tags/tags.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
