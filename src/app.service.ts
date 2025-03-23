import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from Amirrr! Checkout the API documentation at /api';
  }
}
