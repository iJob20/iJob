import { Test } from '@nestjs/testing';

import { UserService } from './user.service';

describe('AppService', () => {
  let service: UserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = app.get<UserService>(UserService);
  });

  describe('getData', () => {
    it('should return "Welcome to api-gateway!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to api-gateway!' });
    });
  });
});
