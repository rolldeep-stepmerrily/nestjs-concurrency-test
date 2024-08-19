import { Injectable } from '@nestjs/common';
import path from 'path';
import { Worker } from 'worker_threads';

@Injectable()
export class AppService {
  private computation(iterations: number): number {
    return Array.from({ length: iterations }, (_, i) => Math.sqrt(i)).reduce(
      (acc: number, cur: number) => acc + cur,
      0,
    );
  }

  async testPromiseAll(iterations: number): Promise<number> {
    const tasks = Array(4)
      .fill(null)
      .map(() => this.computation(iterations / 4));

    const results = await Promise.all(tasks);

    return results.reduce((acc: number, cur: number) => acc + cur, 0);
  }

  async testWorkerThreads(iterations: number): Promise<number> {
    const workerPath = path.resolve(__dirname, 'workers/worker.js');
    const workers = Array(4)
      .fill(null)
      .map(
        () =>
          new Promise<number>((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: { iterations: iterations / 4 } });

            worker.on('message', resolve);
            worker.on('error', reject);
          }),
      );

    const results = await Promise.all(workers);

    return results.reduce((acc: number, cur: number) => acc + cur, 0);
  }
}
