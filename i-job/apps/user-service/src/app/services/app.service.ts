import { SignupUserDto } from '@i-job/shared/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../models/user.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {}

  async createUser(createUserDto: SignupUserDto) {
    const createdUser = await this.userRepository.createUser(createUserDto);
    return createdUser;
  }
}
