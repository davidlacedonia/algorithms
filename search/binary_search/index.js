const { ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");

const TARGET = 7;

/**
 * Binary Search O(log n).
 *
 * Assigns middle index to pivot
 * If the value on index 'pivot' equals the target, returns the index
 * If the value is lesser, move the left index to pivot + 1
 * If the value is greater, move the right index to pivot - 1
 * Moving the left/right indexes, will reduce the search in halves.
 */
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const pivot = Math.floor((right + left) / 2);

    if (array[pivot] === target) {
      return pivot;
    }
    if (array[pivot] < target) {
      left = pivot + 1;
    }
    if (array[pivot] > target) {
      right = pivot - 1;
    }
  }

  return null;
}

const index = binarySearch(ORDERED_ARRAY, TARGET);
expect(index).toBe(6);
