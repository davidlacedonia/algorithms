/**
 * Selection sort O(n^2).
 *
 * Loop through every element in the array,
 * and for each element, we iterate every element on the right.
 * If there is a lesser value, we swap them.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array unsorted elements
 *
 * @return {array} sorted elements
 */
function selectionSort(array = []) {
  if (!Array.isArray(array)) return [];

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

export default selectionSort;
