import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { CreateAuthDto } from '@ijob/shared/dto';

@Injectable()
export class AuthRepository extends Repository<Auth> {
  constructor(private dataSource: DataSource) {
    super(Auth, dataSource.createEntityManager());
  }

  async findById(id: string): Promise<Auth> {
    return await this.findOne({ where: { id } });
  }

  async saveSingle(creataAuthDto: CreateAuthDto): Promise<Auth> {
    return await this.save(creataAuthDto);
  }
}
