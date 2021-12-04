const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

async function main() {
  const sequence = await readFile(file);
  let output = 0,
    prev = Infinity,
    slidingWindow = [];

  for (let number of sequence) {
    slidingWindow.push(+number);

    if (slidingWindow.length > 3) {
      slidingWindow.shift();
    }

    if (slidingWindow.length === 3) {
      const sum = slidingWindow.reduce((p, n) => p + n, 0);
      if (sum > prev) {
        output += 1;
      }
      prev = sum;
    }
  }

  console.log(output);
  return output;
}

main()