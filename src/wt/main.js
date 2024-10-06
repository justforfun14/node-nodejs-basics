import { Worker } from "node:worker_threads";
import path from "node:path";
import os from "os";

const workerPath = path.normalize(`${import.meta.dirname}/worker.js`);

const performCalculations = async () => {
  const currentNumber = 10;
  const availableCoresNum = os.availableParallelism();
  const results = new Array(availableCoresNum);

  for (let i = 0; i < availableCoresNum; i++) {
    const worker = new Worker(workerPath);

    worker.postMessage(currentNumber + i);

    worker.on("message", (message) => {
      results[i] = message;
      worker.terminate();
      if (!results.includes(undefined)) {
        console.log(results);
      }
    });
  }
};

await performCalculations();
