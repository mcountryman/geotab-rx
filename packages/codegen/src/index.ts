import yargs from "yargs";

const { argv } = yargs(process.argv.slice(2))
  .usage("Usage: $0 -i [url] -o [output]")
  .option({
    url: { type: "string", alias: "i", default: false },
    out: { type: "string", alias: "o" },
  });
