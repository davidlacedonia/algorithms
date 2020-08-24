const { ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");

/**
 * Linear search O(n).
 *
 * @param {Object} array Array of values
 * @param {number} element Element to search
 *
 * @return {number} Index of element
 */
function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch(ORDERED_ARRAY, ORDERED_ARRAY[5]);
expect(result).toBe(5);
