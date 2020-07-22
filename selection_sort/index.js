const { expect } = require("../expect");
const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../data");

/**
 * Selection sort O(n2).
 *
 * Loops every item, and for each of them, loops in reverse order.
 * If the (previous) element is greater than the actual value,
 * moves it one place to the right.
 */
function selectionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const value = array[i];

    let j = i - 1;
    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = value;
  }
  return array;
}

const result = selectionSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
