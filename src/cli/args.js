const parseArgs = () => {
  const args = [];

  const slicedArgs = process.argv.slice(2);
  slicedArgs.forEach((item, index) => {
    if (item.startsWith("--")) {
      args.push(`${item} is ${slicedArgs[index + 1]}`);
    }
  });

  console.log(args.join(", "));
};

parseArgs();
