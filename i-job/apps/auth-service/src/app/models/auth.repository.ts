import { CreateAuthUserDto } from '@i-job/shared/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';

@Injectable()
export class AuthRepository extends Repository<Auth> {
  constructor(
    @InjectRepository(Auth)
    repository: Repository<Auth>
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async createAuthEntity(createAuthDto: CreateAuthUserDto): Promise<Auth> {
    const auth = new Auth();
    auth.email = createAuthDto.email;
    auth.password = createAuthDto.hashedPassword;
    auth.type = createAuthDto.type;
    return await this.save(auth);
  }

  async findByEmail(email: string): Promise<Auth> {
    const user = await this.findOne({ where: { email } });
    return user;
  }
}
