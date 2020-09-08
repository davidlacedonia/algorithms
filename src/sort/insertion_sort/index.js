/**
 * Insertion sort O(n2).
 *
 * Loops every item, and for each of them, loops in reverse order.
 * If the (previous) element is greater than the actual value,
 * moves it one place to the right.
 */
function insertionSort(array) {
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

export default insertionSort;
