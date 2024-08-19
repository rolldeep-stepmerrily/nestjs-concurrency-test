import { parentPort, workerData } from 'worker_threads';

const computation = (iterations: number): number => {
  return Array.from({ length: iterations }, (_, i) => Math.sqrt(i)).reduce((acc: number, cur: number) => acc + cur, 0);
};

if (parentPort) {
  const result = computation(workerData.iterations);
  parentPort.postMessage(result);
}
