import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ErrorResponse } from '../api/responses/error.response';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    console.log('ISSSS: ', exception instanceof HttpException);

    const path = httpAdapter?.getRequestUrl(ctx.getRequest()) || null;

    const response = new ErrorResponse(
      httpStatus,
      'Internal server error.',
      new Date().toISOString(),
      path
    );
    httpAdapter?.reply(ctx.getResponse(), response, httpStatus);
  }
}
