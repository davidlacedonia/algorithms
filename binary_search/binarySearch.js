const { ORDERED_ARRAY } = require("../data");

const TARGET = 7;

/**
 * Binary Search O(log n)
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
console.log(index);
