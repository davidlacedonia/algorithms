const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

async function main() {
  const sequence = await readFile(file)
  let output = 0, horizontal = 0, vertical = 0

  for (let move of sequence) {
    const [intention, steps] = move.split(' ')
    
    switch (intention) {
      case 'forward':
        horizontal += Number(steps)
        break;
      case 'up':
        vertical -= Number(steps)
        break;
      case 'down':
        vertical += Number(steps)
        break;
    }
  }

  output = horizontal * vertical
  console.log(output)
  return output
}

main()