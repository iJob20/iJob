import { BaseResponse } from './base.response';

export class SuccessResponse<T> implements BaseResponse<T> {
  constructor(public data: T, public status: number) {}
}
