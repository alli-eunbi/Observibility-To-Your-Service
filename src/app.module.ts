import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TraceTestingModule } from './trace-testing/trace-testing.module';

@Module({
  imports: [TraceTestingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
