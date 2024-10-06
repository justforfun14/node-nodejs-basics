import { createWriteStream, readFile } from "node:fs";
import path from "node:path";

const targetPath = path.normalize(`${import.meta.dirname}/files/fresh.txt`);

const create = async () => {
  readFile(targetPath, (_, data) => {
    if (data !== undefined) {
      throw new Error("FS operation failed");
    } else {
      const file = createWriteStream(targetPath);

      file.write("I am fresh and young");
      file.close();
    }
  });
};

await create();
