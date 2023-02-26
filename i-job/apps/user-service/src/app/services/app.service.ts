import { SignupUserDto } from '@i-job/shared/dto';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BaseResponse,
  ErrorResponse,
  SuccessResponse,
} from 'libs/shared/src/lib/api/responses';
import { CreateUserResponse } from '../interfaces/dto/create-user.response';
import { UserRepository } from '../models/user.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {}

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new BadRequestException();
    }
    return user;
  }

  async createUser(
    createUserDto: SignupUserDto
  ): Promise<BaseResponse<CreateUserResponse>> {
    const createdUser = await this.userRepository.createUser(createUserDto);
    if (!createdUser) {
      return new ErrorResponse(
        HttpStatus.BAD_REQUEST,
        'Error registering user',
        new Date().toISOString()
      );
    }
    return new SuccessResponse(
      new CreateUserResponse(createdUser),
      HttpStatus.CREATED
    );
  }
}
