import { Test } from '@nestjs/testing';

import { CompaniesService } from './companies.service';

describe('AppService', () => {
  let service: CompaniesService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CompaniesService],
    }).compile();

    service = app.get<CompaniesService>(CompaniesService);
  });

  describe('getData', () => {
    it('should return "Welcome to api-gateway!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to api-gateway!' });
    });
  });
});
