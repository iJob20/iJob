import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Jwt } from '../auth';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { accessToken } = context.switchToHttp().getRequest();
    const data: any = await Jwt.verifyToken(accessToken);

    return data.role === Role.Admin;
  }
}
