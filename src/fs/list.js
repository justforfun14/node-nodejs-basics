import { readdir } from "node:fs";
import path from "node:path";

const targetPath = path.normalize(`${import.meta.dirname}/files`);

const list = async () => {
  readdir(targetPath, (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log(data);
  });
};

await list();
