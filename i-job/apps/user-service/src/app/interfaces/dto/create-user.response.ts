import { User } from '../../models/user.entity';

export class CreateUserResponse {
  constructor(public user: User) {}
}
