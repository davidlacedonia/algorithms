/**
 * Curry O(n).
 *
 * Returns a curried function.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {function} fn Function to be curried
 *
 * @returns {function} Curried function.
 */
function curry(fn) {
  if (typeof fn !== 'function') return null;

  return function curried(...args) {
    // if the amount of arguments, is greater or equal
    // we just call the original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      // otherwise, we return a function
      return function (...args2) {
        // that returns (recursively) our closured function,
        // concatenating the new arguments, with the previous ones
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

export default curry;
