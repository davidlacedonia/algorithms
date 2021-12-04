const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

async function main() {
  const sequence = await readFile(file)
  let output
  let gamma = '', epsilon = ''
  let hash = {}

  for (let i = 0; i < sequence.length; i++) {
    const diagnosis = sequence[i]
    for (let j = 0; j < diagnosis.length; j++) {
      if (!hash[j]) {
        hash[j] = {}
      }

      if (diagnosis[j] === '0') {
        hash[j]['0'] = isNaN(hash[j]['0']) ? 1 : hash[j]['0'] + 1
      } else {
        hash[j]['1'] = isNaN(hash[j]['1']) ? 1 : hash[j]['1'] + 1
      }
    }
  }

  // gamma: most common bit
  // epsilon: least common bit
  const digits = Object.keys(hash)
  for (let i = 0; i < digits.length; i++) {
    const digit = hash[digits[i]]
    
    gamma += +digit['0'] > +digit['1'] ? '0' : '1'
    epsilon += +digit['0'] < +digit['1'] ? '0' : '1'
  }

  output = parseInt(gamma, 2) * parseInt(epsilon, 2)
  console.log(output)
  return output
}

main()