function partition(array, min, max) {
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
 * and orders the left part of the pivot, and positions the pivot
 * in the correct pisition
 */
function quickSort(array, min, max) {
  if (min < max) {
    const pivot = partition(array, min, max);
    quickSort(array, min, pivot - 1);
    quickSort(array, pivot + 1, max);
  }

  return array;
}

export default quickSort;
