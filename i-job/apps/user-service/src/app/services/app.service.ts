import { SignupUserDto } from '@i-job/shared/dto';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserResponse } from '../interfaces/dto/create-user.response';
import { UserRepository } from '../models/user.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {}

  async createUser(createUserDto: SignupUserDto) {
    const createdUser = await this.userRepository.createUser(createUserDto);
    if (!createdUser) {
      throw new BadRequestException('Error registering user');
    }
    return new CreateUserResponse(createdUser, HttpStatus.CREATED);
  }
}
