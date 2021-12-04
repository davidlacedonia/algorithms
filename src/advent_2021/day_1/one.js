const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

async function main() {
  const sequence = await readFile(file);
  let output = 0,
    prev = Infinity;

  for (let number of sequence) {
    if (prev && Number(number) > Number(prev)) {
      output += 1;
    }

    prev = number;
  }

  console.log(output);
  return output;
}

main();
