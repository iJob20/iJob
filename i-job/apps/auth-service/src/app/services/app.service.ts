import { CreateAuthDto } from '@i-job/shared/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from '../models/auth.entity';
import { AuthRepository } from '../models/auth.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AuthRepository) private authRepository: AuthRepository
  ) {}

  async save(createAuthDto: CreateAuthDto): Promise<Auth> {
    const isUserExist = await this.authRepository.findByEmail(
      createAuthDto.email
    );
    if (isUserExist) {
      throw new BadRequestException('User already exist');
    }
    return this.authRepository.createAuthEntity(createAuthDto);
  }
}
