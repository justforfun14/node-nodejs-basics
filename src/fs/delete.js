import { readFile, unlink } from "node:fs";
import path from "node:path";

const targetPath = path.normalize(
  `${import.meta.dirname}/files/fileToRemove.txt`
);

const remove = async () => {
  readFile(targetPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      unlink(targetPath, () => undefined);
    }
  });
};

await remove();
