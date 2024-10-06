import crypto from "crypto";
import { createReadStream } from "node:fs";
import path from "node:path";

const targetPath = path.normalize(
  `${import.meta.dirname}/files/fileToCalculateHashFor.txt`
);

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const rs = createReadStream(targetPath);
  rs.on("data", (chunk) => hash.update(chunk));
  rs.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();
