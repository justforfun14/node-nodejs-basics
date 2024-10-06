import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { createGzip } from "node:zlib";

const fromPath = path.normalize(
  `${import.meta.dirname}/files/fileToCompress.txt`
);

const toPath = path.normalize(`${import.meta.dirname}/files/archive.gz`);

const compress = async () => {
  const rStream = createReadStream(fromPath);
  const wStream = createWriteStream(toPath);
  const gzip = createGzip();

  rStream.pipe(gzip).pipe(wStream);
};

await compress();
