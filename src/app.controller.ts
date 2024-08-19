import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('promise-all')
  async testPromiseAll(@Query('i') iterations: string): Promise<string> {
    const start = Date.now();
    const result = await this.appService.testPromiseAll(parseInt(iterations) || 1000000);
    const end = Date.now();

    return `Promise.all: ${end - start} milliseconds, result: ${result}`;
  }

  @Get('worker-threads')
  async testWorkerThreads(@Query('i') iterations: string): Promise<string> {
    const start = Date.now();
    const result = await this.appService.testWorkerThreads(parseInt(iterations) || 1000000);
    const end = Date.now();

    return `Worker Threads: ${end - start} milliseconds, result: ${result}`;
  }
}
