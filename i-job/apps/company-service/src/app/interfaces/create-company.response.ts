import { Companies } from '../models/company.entity';

export class CreateCompanyResponse {
  constructor(public company: Companies) {}
}
