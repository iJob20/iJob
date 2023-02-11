import { CreateAuthUserDto, CreateUserDto } from '@i-job/shared/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    repository: Repository<User>
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async createUser(createAuthDto: CreateUserDto): Promise<User> {
    const auth = new User();
    auth.email = createAuthDto.email;
    auth.firstName = createAuthDto.firstName;
    auth.lastName = createAuthDto.lastName;
    auth.authId = createAuthDto.authId;
    auth.phoneNumber = createAuthDto.phoneNumber;
    return await this.save(auth);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.findOne({ where: { email } });
    return user;
  }
}
