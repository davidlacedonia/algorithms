/**
 * Flatten list O(n).
 *
 * Loops array of elements recursively.
 *
 * @param {array} list Array of elements
 *
 * @returns {array} flattened array
 */
function flattenList(list) {
  let flattened = [];

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (Array.isArray(element)) {
      flattened.push(...flattenList(element));
    } else {
      flattened.push(element);
    }
  }

  return flattened;
}

module.exports = flattenList;
