/**
 * Random numbers
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} limit Size of array
 * @param {number} max Max number
 * @param {function} mapper Transforms every number
 *
 * @return {array} Array of random numbers
 */
export const randomNumbers = (limit, max = 10, mapper) => {
  let numbers = [];

  while (numbers.length < limit) {
    let number = Math.random() * max;
    if (mapper) {
      number = mapper(number);
    }
    numbers.push(number);
  }

  return numbers;
};
