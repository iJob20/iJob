import { Test } from '@nestjs/testing';

import { CompanyService } from './company.service';

describe('AppService', () => {
  let service: CompanyService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CompanyService],
    }).compile();

    service = app.get<CompanyService>(CompanyService);
  });

  describe('getData', () => {
    it('should return "Welcome to api-gateway!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to api-gateway!' });
    });
  });
});
