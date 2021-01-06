/**
 * Random numbers
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} limit Size of array
 * @param {number} max Max number
 *
 * @returns {array} Array of random numbers
 */
export const randomNumbers = (limit, max = 10) => {
  let numbers = [];

  while (numbers.length < limit) {
    numbers.push(Math.random() * max);
  }

  return numbers;
};
