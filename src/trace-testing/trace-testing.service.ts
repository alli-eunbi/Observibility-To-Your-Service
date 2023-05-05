import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class TraceTestingService {
  getWrongButton() {
    throw new BadRequestException();
  }

  getRightButton() {
    return;
  }
}
