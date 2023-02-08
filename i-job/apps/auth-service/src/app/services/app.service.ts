import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../models/auth.repository';

@Injectable()
export class AppService {
  constructor(private authRepository: AuthRepository) {}

  getData(): { message: string } {
    return { message: 'Welcome to auth!' };
  }
}
