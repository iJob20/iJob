import { Controller, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from '@i-job/shared/filters';
import { UserService } from './user.service';

@Controller('v1/auth')
@UseFilters(AllExceptionsFilter)
export class UserController {
  constructor(private readonly authService: UserService) {}
}
