const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

const DAYS = 256
const sequence = ['8', '7', '6', '5', '4', '3', '2', '1', '0']

const count = hash => {
  let sum = 0
  for (let i = 0; i < sequence.length; i++) {
    const key = sequence[i]
    sum += hash[key]
  }
  return sum
}

const grow = hash => {
  let prev = null

  for (let i = 0; i < sequence.length; i++) {
    const key = sequence[i]

    const aux = hash[key]
    hash[key] = prev ? +prev : 0
    prev = aux
  }

  if (prev > 0) {
    hash['8'] += prev
    hash['6'] += prev
  }

  return hash
}

/**
 * Model the grow rate
 * 
 * each lanternfish creates a new lanternfish once every 7 days
 * this process isn't necessarily synchronized between every lanternfish
 * 
 * each fish is a single number that represents 
 * the number of days until it creates a new lanternfish
 * 
 * a new lanternfish needs two more days before it's capable 
 * of producing more lanternfish
 * 
 * a lanternfish that creates a new fish resets its timer to 6
 * The new lanternfish starts with an internal timer of 8 and does 
 * not start counting down until the next day
 * 
 * 3 -> 2 -> 1 -> 0 -> 6
 * -    -    -    -    6,8
 * 
 * @returns {number} How many lanternfish would there be after 256 days
 */
async function main() {
  const sequence = await readFile(file, ',');
  let output = 0, lanternfish = sequence.map(i => Number(i))
  let hash = {
    '8': 0,
    '7': 0,
    '6': 0,
    '5': 0,
    '4': 0,
    '3': 0,
    '2': 0,
    '1': 0,
    '0': 0,
  }

  for (let fish of lanternfish) {
    hash[fish] += 1
  }
  
  for (let i = 0; i < DAYS; i++) {
    hash = grow(hash)
  }

  output = count(hash)
  console.log(output)
  return output;
}

main();
