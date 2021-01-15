const sortHalves = (left, right) => {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < left.length || j < right.length) {
    if (left[i] <= right[j] || !right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted;
};

/**
 * Merge sort O(n log n).
 *
 * Divide array in halves recursively,
 * sorting and merging left and right.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array unsorted numbers
 *
 * @return {array} sorted numbers
 */
function mergeSort(array = []) {
  if (array.length < 2) return array;
  if (!Array.isArray(array)) return [];

  const middle = Math.ceil(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return sortHalves(mergeSort(left), mergeSort(right));
}

export default mergeSort;
