import { Test, TestingModule } from '@nestjs/testing';

import { CompanyController } from './companies.controller';
import { CompaniesService } from './companies.service';

describe('AuthController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompaniesService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api-gateway!"', () => {
      const appController = app.get<CompanyController>(CompanyController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to api-gateway!',
      });
    });
  });
});
