const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

const STEPS = 40

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

const getMaxOfEveryLetter = pairs => {
  let letters = {}

  for (let pair of Object.keys(pairs)) {
    let [left, right] = pair

    letters[left] = letters[left] || [0, 0]
    letters[right] = letters[right] || [0, 0]

    letters[left] = [letters[left][0] + 1 * pairs[pair], letters[left][1]]
    letters[right] = [letters[right][0], letters[right][1] + 1 * pairs[pair]]
  }


  let _letters = {}
  for (let letter of Object.keys(letters)) {
    _letters[letter] = Math.max(...letters[letter])
  }

  return _letters
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
  let output = 0, polymer = template, pairs = {}

  const rules = _rules.split('\n').map(Rule).reduce((obj, el) => {
    obj[el[0]] = el[1]
    return obj
  }, {})

  for (let i = 0; i < template.length - 1; i++) {
    const key = template[i] + template[i + 1]
    pairs[key] = (pairs[key] || 0) + 1
  }

  for (let step = 0; step < STEPS; step++) {
    _pairs = {}
    for (let pair of Object.keys(pairs)) {

      const amount = pairs[pair]

      let adjacent = rules[pair]
      let left = pair[0] + adjacent
      let right = adjacent + pair[1]
      _pairs[left] = (_pairs[left] || 0) + 1 * amount
      _pairs[right] = (_pairs[right] || 0) + 1 * amount
    }
    pairs = _pairs
  }

  const letters = getMaxOfEveryLetter(_pairs)
  console.log(letters)
  output = mostCommonMinusLeastCommon(letters)
  console.log(output);
  return output;
}

main();
