import { BaseResponse } from './base.response';

export class ErrorResponse<T> implements BaseResponse<T> {
  constructor(
    public status: number,
    public message: string,
    public timestamp: string,
    public url: string
  ) {}
}
