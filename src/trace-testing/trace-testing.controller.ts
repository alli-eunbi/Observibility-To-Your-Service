import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { SentryInterceptor } from 'src/sentry-interceptor';
import { TraceTestingService } from './trace-testing.service';

@UseInterceptors(SentryInterceptor)
@Controller('trace-testing')
export class TraceTestingController {
  constructor(private readonly traceTestingService: TraceTestingService) {}

  @Get('/wrong-button')
  getWrongButton() {
    console.log('wrong 호출완료');
    return this.traceTestingService.getWrongButton();
  }

  @Get('/right-button')
  getRightButton() {
    console.log('right 호출완료');
    return this.traceTestingService.getRightButton();
  }
}
