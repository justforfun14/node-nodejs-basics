import { createReadStream } from "fs";
import path from "node:path";

const targetPath = path.normalize(
  `${import.meta.dirname}/files/fileToRead.txt`
);

const read = async () => {
  const rStream = createReadStream(targetPath);

  rStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
