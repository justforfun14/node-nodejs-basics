import { readFile } from "node:fs";
import path from "node:path";

const targetPath = path.normalize(
  `${import.meta.dirname}/files/fileToRead.txt`
);

const read = async () => {
  readFile(targetPath, "utf8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    console.log(data);
  });
};

await read();
