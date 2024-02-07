import { Test, TestingModule } from '@nestjs/testing';
import { TasaBcvController } from './tasa-bcv.controller';

describe('TasaBcvController', () => {
  let controller: TasaBcvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasaBcvController],
    }).compile();

    controller = module.get<TasaBcvController>(TasaBcvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
