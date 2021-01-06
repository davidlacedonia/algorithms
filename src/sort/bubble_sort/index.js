/**
 * Bubble Sort O(n^2).
 *
 * Loops through the array swapping adjacent pairs from left to right.
 * Swaps if the left element is greater than the right element.
 * On every loop, the greatest element not already ordered,
 * will be placed at the right position.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param array unsorted elements
 *
 * @returns sorted elements
 */
function bubbleSort(array = []) {
  if (!Array.isArray(array)) return null;

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i + 1];
        array[i + 1] = array[i];
        array[i] = aux;
      }
    }
  }

  return array;
}

export default bubbleSort;
