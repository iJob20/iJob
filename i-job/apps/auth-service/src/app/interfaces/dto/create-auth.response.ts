import { Auth } from '../../models/auth.entity';

export class CreateAuthResponse {
  constructor(public auth: Auth, public token: string) {}
}
