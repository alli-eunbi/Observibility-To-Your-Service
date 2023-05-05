import { Module } from '@nestjs/common';
import { TraceTestingController } from './trace-testing.controller';
import { TraceTestingService } from './trace-testing.service';

@Module({
  controllers: [TraceTestingController],
  providers: [TraceTestingService],
})
export class TraceTestingModule {}
