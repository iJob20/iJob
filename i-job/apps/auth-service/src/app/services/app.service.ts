import { CreateAuthUserDto, LoginAuthUserDto } from '@i-job/shared/dto';
import {
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
import { SuccessResponse } from 'libs/shared/src/lib/api/responses/success.response';
import { BaseResponse } from 'libs/shared/src/lib/api/responses/base.response';
import { ErrorResponse } from 'libs/shared/src/lib/api/responses/error.response';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AuthRepository) private authRepository: AuthRepository
  ) {}

  async signin(
    signinUserDto: LoginAuthUserDto
  ): Promise<BaseResponse<SigninAuthResponse>> {
    const auth = await this.authRepository.findByEmail(signinUserDto.email);
    if (!auth || auth.type !== signinUserDto.type) {
      return new ErrorResponse(
        HttpStatus.BAD_REQUEST,
        'Email or password is incorrect',
        new Date().toISOString()
      );
    }
    const isPasswordValid = await Password.verifyPassword(
      signinUserDto.password,
      auth.password
    );
    if (!isPasswordValid) {
      return new ErrorResponse(
        HttpStatus.BAD_REQUEST,
        'Email or password is incorrect',
        new Date().toISOString()
      );
    }
    const accessToken = await Jwt.signToken(auth.email);
    return new SuccessResponse(
      new SigninAuthResponse(auth, accessToken),
      HttpStatus.OK
    );
  }

  async save(
    createAuthDto: CreateAuthUserDto
  ): Promise<BaseResponse<CreateAuthResponse>> {
    const isUserExist = await this.authRepository.findByEmail(
      createAuthDto.email
    );
    if (isUserExist) {
      return new ErrorResponse(
        HttpStatus.BAD_REQUEST,
        'User already exist',
        new Date().toISOString()
      );
    }
    const hashedPassword = await Password.toHash(createAuthDto.password);
    createAuthDto.hashedPassword = hashedPassword;
    const authed = await this.authRepository.createAuthEntity(createAuthDto);
    if (!authed) {
      return new ErrorResponse(
        HttpStatus.BAD_REQUEST,
        'Unable to register user',
        new Date().toISOString()
      );
    }
    const accessToken = await Jwt.signToken(createAuthDto.email);
    return new SuccessResponse(
      new CreateAuthResponse(authed, accessToken),
      HttpStatus.CREATED
    );
  }
}
