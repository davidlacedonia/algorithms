const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

const STEPS = 10

const Rule = rule => {
  return rule.split(' -> ')
}

const mostCommonMinusLeastCommon = count => {
  let most = 0, least = Infinity

  for (let key of Object.keys(count)) {
    most = Math.max(most, count[key])
    least = Math.min(least, count[key])
  }

  return most - least
}

/**
 * Find the optimal polymer formula
 * 
 * @param {string} template polymer template
 * @param {array} rules list of pair insertion rules
 * 
 * AB -> C
 * if A and B are immediately adjacent, element C should be inserted between them
 * 
 * these pairs overlap
 * the second element of one pair is the first of the next one
 * 
 * this insertions happen simultaneously
 * so inserted elements are not considered to be part of a pair until the next step
 * 
 * @returns {number} quantity of most common elem - quantity of least common elem
 */
async function main() {
  const [template, _rules] = await readFile(file, '\n\n');
  let output = 0, polymer = template, count = {}

  const rules = _rules.split('\n').map(Rule).reduce((obj, el) => {
    obj[el[0]] = el[1]
    return obj
  }, {})

  for (let step = 0; step < STEPS; step++) {
    let _polymer = ''
    count = {}

    for (let i = 0; i < polymer.length - 1; i++) {
      const key = polymer[i] + polymer[i + 1]
      _polymer += key[0] + rules[key]

      count[key[0]] = (count[key[0]] || 0) + 1
      count[rules[key]] = (count[rules[key]] || 0) + 1
    }

    const last = polymer[polymer.length - 1]
    count[last] = (count[last] || 0) + 1
    _polymer += last
    polymer = _polymer
  }

  output = mostCommonMinusLeastCommon(count)
  console.log(output);
  return output;
}

main();
