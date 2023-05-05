import { Test, TestingModule } from '@nestjs/testing';
import { TraceTestingController } from './trace-testing.controller';

describe('TraceTestingController', () => {
  let controller: TraceTestingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraceTestingController],
    }).compile();

    controller = module.get<TraceTestingController>(TraceTestingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
