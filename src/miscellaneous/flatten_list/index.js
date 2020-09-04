/**
 * Flatten list O(n).
 *
 * Loops array of elements recursively.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} list Array of elements
 *
 * @returns {array} flattened array
 */
function flattenList(list) {
  let flattened = [];

  for (let element of list) {
    if (Array.isArray(element)) {
      flattened.push(...flattenList(element));
    } else {
      flattened.push(element);
    }
  }

  return flattened;
}

module.exports = flattenList;
