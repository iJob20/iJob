import * as jwt from 'jsonwebtoken';

export class Jwt {
  static async signToken(email: string) {
    const token = jwt.sign(
      {
        data: email,
      },
      process.env.JWT_SECRET,
      { algorithm: 'RS256' }
    );
    return token;
  }
  static async verifyToken(token: string) {
    try {
      const isValidToken = jwt.verify(token, process.env.JWT_SECRET);
      return isValidToken;
    } catch (e) {
      return false;
    }
  }
}
