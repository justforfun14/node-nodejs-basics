import { cp, readdir } from "node:fs";
import path from "node:path";

const copyFromPath = path.normalize(`${import.meta.dirname}/files/`);
const copyToPath = path.normalize(`${import.meta.dirname}/files_copy/`);

const copy = async () => {
  readdir(copyFromPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      readdir(copyToPath, (_, data) => {
        if (data) {
          throw new Error("FS operation failed");
        } else {
          cp(
            copyFromPath,
            copyToPath,
            { errorOnExist: true, recursive: true },
            (err) => {
              if (err) {
                throw new Error("FS operation failed");
              }
            }
          );
        }
      });
    }
  });
};

await copy();
