/**
 * Memoized fibonacci
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} i
 * @param {array} cache Array of cached fibonacci results
 *
 * @returns {number} fibinacci number
 */
export function memoFibonacci(i, cache = []) {
  if (i === 0 || i === 1) return i;
  if (!cache[i]) {
    cache[i] = memoFibonacci(i - 1, cache) + memoFibonacci(i - 2, cache);
  }
  return cache[i];
}

/**
 * Fibonacci
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} i
 *
 * * @returns {number} fibinacci number
 */
function fibonacci(i) {
  if (i === 0 || i === 1) return i;
  return fibonacci(i - 1) + fibonacci(i - 2);
}

export default fibonacci;
