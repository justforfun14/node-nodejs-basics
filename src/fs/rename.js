import { readFile, rename as r } from "node:fs";
import path from "node:path";

const renameFromPath = path.normalize(
  `${import.meta.dirname}/files/wrongFilename.txt`
);
const renameToPath = path.normalize(
  `${import.meta.dirname}/files/properFilename.md`
);

const rename = async () => {
  readFile(renameFromPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      readFile(renameToPath, (_, data) => {
        if (data) {
          throw new Error("FS operation failed");
        } else {
          r(renameFromPath, renameToPath, () => undefined);
        }
      });
    }
  });
};

await rename();
