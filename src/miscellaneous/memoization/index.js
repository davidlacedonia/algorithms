/**
 * Memoization.
 *
 * Returns cached result if already present,
 * otherwise, use the stringified parameters as key,
 * to store the new result.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {function} fn Original function
 *
 * @returns {function} Memoized function
 */
function memoization(fn) {
  let cache = {};

  return function () {
    const key = JSON.stringify(arguments);

    if (cache[key]) {
      return cache[key];
    } else {
      cache[key] = fn.apply(null, arguments);
      return cache[key];
    }
  };
}

export default memoization;
