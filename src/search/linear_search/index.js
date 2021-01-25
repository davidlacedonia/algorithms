/**
 * Linear search O(n).
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array sorted numbers
 * @param {number} el element to search
 *
 * @return {number} index of element
 */
function linearSearch(array = [], element) {
  if (!Array.isArray(array) || !element) return null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return null;
}

export default linearSearch;
