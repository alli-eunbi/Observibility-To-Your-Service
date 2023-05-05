import { Controller, Get } from '@nestjs/common';
import { TraceTestingService } from './trace-testing.service';

@Controller('trace-testing')
export class TraceTestingController {
  constructor(private readonly traceTestingService: TraceTestingService) {}

  @Get('/wrong-button')
  getWrongButton() {
    return this.traceTestingService.getWrongButton();
  }

  @Get('/right-button')
  getRightButton() {
    return this.traceTestingService.getRightButton();
  }
}
