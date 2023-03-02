import * as jwt from 'jsonwebtoken';

export class Jwt {
  static async signToken(email: string, role: string) {
    const accessToken = jwt.sign(
      {
        email,
        role,
      },
      process.env.JWT_SECRET
    );
    return accessToken;
  }
  static async verifyToken(accessToken: string) {
    try {
      const isValidToken = jwt.verify(accessToken, process.env.JWT_SECRET);
      return isValidToken;
    } catch (e) {
      return false;
    }
  }
}
