import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

interface Token {
  email: string;
  role: string;
}
export class Jwt {
  static async signToken(email: string, role: string) {
    const accessToken = jwt.sign(
      {
        email,
        role,
      },
      'process.env.JWT_SECRET'
    );
    return accessToken;
  }

  static async verifyToken(accessToken: string): Promise<string | JwtPayload> {
    const isValidToken = await jwt.verify(
      accessToken,
      'process.env.JWT_SECRET'
    );
    return isValidToken;
  }
}
