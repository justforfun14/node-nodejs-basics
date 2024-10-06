import { Transform } from "stream";

const transform = async () => {
  const t = new Transform({
    transform(chunk, _, cb) {
      chunk = chunk.reverse() + "\n";

      cb(null, chunk);
    },
  });

  process.stdin.pipe(t).pipe(process.stdout);
};

await transform();
