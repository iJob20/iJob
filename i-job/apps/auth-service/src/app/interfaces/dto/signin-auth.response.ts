import { Auth } from '../../models/auth.entity';

export class SigninAuthResponse {
  constructor(public auth: Auth, public token: string, public status: number) {}
}
