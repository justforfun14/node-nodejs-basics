import { createWriteStream } from "fs";
import path from "node:path";

const targetPath = path.normalize(
  `${import.meta.dirname}/files/fileToWrite.txt`
);

const write = async () => {
  const wStream = createWriteStream(targetPath);

  const content = process.stdin;

  content.on("data", (data) => {
    wStream.write(data);
  });
};

await write();
