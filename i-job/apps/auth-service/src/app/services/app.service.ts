import { CreateAuthDto } from '@i-job/shared/dto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jwt } from '@i-job/shared/auth';
import { AuthRepository } from '../models/auth.repository';
import { Password } from './password';
import { CreateAuthResponse } from '../interfaces/dto/create-auth.response';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AuthRepository) private authRepository: AuthRepository
  ) {}

  async save(createAuthDto: CreateAuthDto): Promise<CreateAuthResponse> {
    const isUserExist = await this.authRepository.findByEmail(
      createAuthDto.email
    );
    if (isUserExist) {
      throw new BadRequestException('User already exist');
    }
    const hashedPassword = await Password.toHash(createAuthDto.password);
    createAuthDto.setPassword = hashedPassword;
    const authed = await this.authRepository.createAuthEntity(createAuthDto);
    if (!authed) {
      throw new InternalServerErrorException('Unable to register user');
    }
    const token = await Jwt.signToken(createAuthDto.email);
    return new CreateAuthResponse(authed, token);
  }
}
