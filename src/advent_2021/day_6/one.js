const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

const DAYS = 80
const NEW_LANTERNSHIP = 8

const addNewLanternfish = (lanternfish, newLanternfish) => {

  while (newLanternfish > 0) {
    lanternfish.push(NEW_LANTERNSHIP)
    newLanternfish -= 1
  }
  return lanternfish
}

const grow = lanternfish => {
  let newLanternfish = 0

  lanternfish = lanternfish.map(fish => {
    if (fish > 0) {
      return fish - 1
    }
    
    if (fish === 0) {
      newLanternfish += 1
      return 6
    }
  })

  lanternfish = addNewLanternfish(lanternfish, newLanternfish)

  return lanternfish
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
 * @returns {number} How many lanternfish would there be after 80 days
 */
async function main() {
  const sequence = await readFile(file, ',');
  let output = 0, lanternfish = sequence.map(i => Number(i))
  
  for (let i = 0; i < DAYS; i++) {
    lanternfish = grow(lanternfish)
  }

  output = lanternfish.length
  console.log(output)
  return lanternfish.length;
}

main();
