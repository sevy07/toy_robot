/**
 * LM Group Technical test
 * 
 * @author Jean-Yves Chanal
 */
const path = require("path");
const readline = require("readline");
const fs = require("fs");

const Parser = require(path.join(__dirname, "app", "Parser"));
const argv = process.argv;

// The first 2 arguments are env specific
if(argv.length > 2) {
  const currentParser = new Parser();
  const stream = fs.createReadStream(argv[2]);
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });

  stream.on("error", (error) => {
    process.stdout.write(`The following eror occured: ${error} \n`);
  });

  rl.on("line", (line) => {
    currentParser.parse(line);
  });

  rl.on("error", (error) => {
    process.stdout.write(`The following eror occured: ${error} \n`);
  });
}
