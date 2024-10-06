import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { createGunzip } from "node:zlib";

const fromPath = path.normalize(`${import.meta.dirname}/files/archive.gz`);

const toPath = path.normalize(
  `${import.meta.dirname}/files/fileToCompress.txt`
);

const decompress = async () => {
  const rStream = createReadStream(fromPath);
  const wStream = createWriteStream(toPath);
  const gzip = createGunzip();

  rStream.pipe(gzip).pipe(wStream);
};

await decompress();
