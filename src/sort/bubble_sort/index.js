const swapAdjacentItems = (array, index) => {
  let aux = array[index + 1];
  array[index + 1] = array[index];
  array[index] = aux;
  return array;
};

/**
 * Bubble Sort O(n^2).
 *
 * Loops through the array swapping adjacent pairs from left to right.
 * Swaps if the left element is greater than the right element.
 * On every loop, the greatest element not already ordered,
 * will be placed at the right position (end of array).
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array unsorted elements
 *
 * @returns {array} sorted elements
 */
function bubbleSort(array = []) {
  if (!Array.isArray(array)) return [];

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        array = swapAdjacentItems(array, i);
      }
    }
  }

  return array;
}

export default bubbleSort;
