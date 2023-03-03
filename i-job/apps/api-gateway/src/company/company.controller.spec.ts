import { Test, TestingModule } from '@nestjs/testing';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

describe('AuthController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompanyService],
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
