/**
 * Insertion sort O(n^2).
 *
 * For every item, loops in reverse order.
 * If the (previous) element is greater than the actual value,
 * it is moved one place to the right, and then the actual value,
 * is placed at the right position.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} unsortedArray
 *
 * @return {array} sorted array
 */
function insertionSort(unsortedArray = []) {
  if (!Array.isArray(unsortedArray)) return [];

  const array = [...unsortedArray];
  for (let i = 1; i < array.length; i += 1) {
    const value = array[i];

    let prevIndex = i - 1;
    while (prevIndex >= 0 && array[prevIndex] > value) {
      array[prevIndex + 1] = array[prevIndex];
      prevIndex -= 1;
    }
    array[prevIndex + 1] = value;
  }
  return array;
}

export default insertionSort;
