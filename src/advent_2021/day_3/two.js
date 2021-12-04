const process = (sequence) => {
  let oxygen = '', co2 = ''
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

  // oxygen: most common bit
  // co2: least common bit
  const digits = Object.keys(hash)
  for (let i = 0; i < digits.length; i++) {
    const digit = hash[digits[i]]
    
    oxygen += +digit['0'] > +digit['1'] ? '0' : '1'
    co2 += +digit['0'] <= +digit['1'] ? '0' : '1'
  }

  return { oxygen, co2 }
}

const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

async function main() {
  const sequence = await readFile(file)
  let output

  

  let oxygenSequence = []
  let co2Sequence = []

  // oxygen * co2

  // oxygen
  // keep only numbers with the most common bit in that position (if equal keep 1s)

  let { oxygen, co2 } = process(sequence)

  for (let i = 0; i < sequence.length; i++) {
    const curr = sequence[i]
    if (curr[0] === oxygen[0]) {
      oxygenSequence.push(curr)
    }
  }

  

  for (let i = 1; i < oxygen.length && oxygenSequence.length > 1; i++) {
    let { oxygen } = process(oxygenSequence)
    oxygenSequence = oxygenSequence.filter(s => s[i] === oxygen[i])
  }
  
  console.log(oxygenSequence)


  // find the most common number in the position
  // keep the numbers with the most common position

  for (let i = 0; i < sequence.length; i++) {
    const curr = sequence[i]
    if (curr[0] === co2[0]) {
      co2Sequence.push(curr)
    }
  }

  for (let i = 1; i < co2.length && co2Sequence.length > 1; i++) {
    let { co2 } = process(co2Sequence)
    co2Sequence = co2Sequence.filter(s => s[i] === co2[i])
  }


  console.log(oxygenSequence, co2Sequence)
  // o2
  // keep only numbers with the least common bit in that position (if equal keep 0s)

  console.log(parseInt(oxygenSequence[0], 2), parseInt(co2Sequence[0], 2))
  output = parseInt(oxygenSequence[0], 2) * parseInt(co2Sequence[0], 2)
  console.log(output)
  return output
}

main()