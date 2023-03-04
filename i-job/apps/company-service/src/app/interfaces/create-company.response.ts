import { Companies } from '../models/companies.entity';

export class CreateCompanyResponse {
  constructor(public company: Companies) {}
}
