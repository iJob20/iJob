import { CreateAuthUserDto, LoginAuthUserDto } from '@i-job/shared/dto';
import {
  BadRequestException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jwt } from '@i-job/shared/auth';
import { AuthRepository } from '../models/auth.repository';
import { Password } from './password';
import { CreateAuthResponse } from '../interfaces/dto/create-auth.response';
import { SigninAuthResponse } from '../interfaces/dto/signin-auth.response';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AuthRepository) private authRepository: AuthRepository
  ) {}

  async signin(signinUserDto: LoginAuthUserDto): Promise<SigninAuthResponse> {
    const auth = await this.authRepository.findByEmail(signinUserDto.email);
    if (!auth || auth.type !== signinUserDto.type) {
      throw new BadRequestException('Email or password is incorrect');
    }
    const isPasswordValid = Password.verifyPassword(
      signinUserDto.password,
      auth.password
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Email or password is incorrect');
    }
    const token = await Jwt.signToken(auth.email);
    return new SigninAuthResponse(auth, token, HttpStatus.OK);
  }

  async save(createAuthDto: CreateAuthUserDto): Promise<CreateAuthResponse> {
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
    return new CreateAuthResponse(authed, token, HttpStatus.CREATED);
  }
}
