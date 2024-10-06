const parseEnv = () => {
  const env = process.env;
  const args = Object.keys(env)
    .filter((item) => item.startsWith("RSS_"))
    .map((key) => `${key}=${env[key]}`);

  console.log(args.join("; "));
};

parseEnv();
