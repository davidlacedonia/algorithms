const { expect } = require("../../expect");
const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");

/**
 * Selection sort O(n2).
 *
 * Loop through every element in the array,
 * and for each element, we iterate every element on the right.
 * If there is a lesser value, we swap them.
 */
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      const aux = array[indexMin];
      array[indexMin] = array[i];
      array[i] = aux;
    }
  }
  return array;
}

const result = selectionSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
