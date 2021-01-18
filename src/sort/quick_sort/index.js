/**
 * Sorts left of pivot (last element),
 * and returns new pivot.
 */
function sortsByPivot(array, min, max) {
  const pivot = array[max];
  let i = min - 1;

  for (let j = min; j <= max - 1; j++) {
    if (array[j] <= pivot) {
      i++;
      let aux = array[i];
      array[i] = array[j];
      array[j] = aux;
    }
  }

  let aux = array[i + 1];
  array[i + 1] = array[max];
  array[max] = aux;

  return i + 1;
}

/**
 * Quick sort O(n log n).
 *
 * Cuts the array on half every time (using a pivot),
 * brings pivot to right position, such that left is smaller,
 * and right is greater than it.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array unsorted elements
 * @param {number} min start of array
 * @param {number} max end of array
 *
 * @return {array} sorted number
 */
function quickSort(array = [], min = 0, max = array.length - 1) {
  if (!Array.isArray(array)) return [];

  if (min < max) {
    const pivot = sortsByPivot(array, min, max);
    quickSort(array, min, pivot - 1);
    quickSort(array, pivot + 1, max);
  }

  return array;
}

export default quickSort;
