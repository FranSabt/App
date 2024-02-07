import { Test, TestingModule } from '@nestjs/testing';
import { TasaBcvService } from './tasa-bcv.service';

describe('TasaBcvService', () => {
  let service: TasaBcvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasaBcvService],
    }).compile();

    service = module.get<TasaBcvService>(TasaBcvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
