import * as jwt from 'jsonwebtoken';

export class Jwt {
  async signToken(email: string) {
    const token = jwt.sign(
      {
        data: email,
      },
      process.env.JWT_SECRET,
      { algorithm: 'RS256' }
    );
    return token;
  }
  async verifyToken(token: string) {
    try {
      const isValidToken = jwt.verify(token, process.env.JWT_SECRET);
      return isValidToken;
    } catch (e) {
      return false;
    }
  }
}
