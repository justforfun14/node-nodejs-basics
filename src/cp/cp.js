import { fork } from "node:child_process";
import path from "node:path";
const targetPath = path.normalize(`${import.meta.dirname}/files/script`);

const spawnChildProcess = async (args) => {
  fork(targetPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
