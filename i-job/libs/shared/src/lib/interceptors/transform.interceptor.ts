import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { IncomingMessage } from 'http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  response: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    console.log(context.switchToHttp().getResponse().statusCode);
    return next.handle().pipe(map((response) => ({ response })));
  }
}
