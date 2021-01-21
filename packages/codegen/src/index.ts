import yargs from "yargs";
import "isomorphic-fetch";
import { parse } from "./parse";
import { writeFile } from "fs";
import { getNextFile } from "./generate";
import { join } from "path";
import { exec } from "child_process";

const { argv } = yargs(process.argv.slice(2))
  .usage("Usage: $0 -i [url] -o [output]")
  .option({
    url: { type: "string", alias: "i", demandOption: true },
    out: { type: "string", alias: "o", demandOption: true },
  });

fetch(argv.url)
  .then((res) => res.text())
  .then((xml) => parse(xml))
  .then((res) => {
    for (const [filename, content] of getNextFile(res)) {
      writeFile(join(argv.out, filename), content, "utf-8", (err) => {
        if (err) console.error("writeFile", err);
      });
    }

    exec(`npx prettier "${argv.out}" -w`);
  });
