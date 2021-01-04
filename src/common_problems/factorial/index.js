/**
 * Recursive factorial.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} number
 *
 * @returns {number} factorial
 */
function factorial(number) {
  if (number <= 1) return number;
  return number * factorial(number - 1);
}

export default factorial;
