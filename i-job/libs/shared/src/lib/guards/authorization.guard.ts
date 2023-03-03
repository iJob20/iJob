import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from 'jsonwebtoken';
import { Jwt } from '../auth';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    // request.query.authorization);
    const token =
      request.query.authorization ||
      request.body.authorization ||
      request.params.authorization;
    if (!token) {
      throw new UnauthorizedException();
    }
    const data: any = await Jwt.verifyToken(token);

    request.userEmail = data.email;
    request.userRole = data.role;
    return true;
  }
}
