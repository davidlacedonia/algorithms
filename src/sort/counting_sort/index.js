/**
 * Counting sort O(n+k).
 *
 * Stores repetitions in array, using the value as index.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array unordered array
 *
 * @return {array} ordered array
 */
function countingSort(array = []) {
  let reps = [];
  let result = [];
  if (!Array.isArray(array)) return [];

  // store repetitions in array (using the value as index)
  array.forEach((value) => {
    reps[value] = (reps[value] || 0) + 1;
  });

  // fill empty slots with 0
  for (let i = 0; i < reps.length; i++) {
    reps[i] = reps[i] || 0;
  }

  // accumulates repetitions
  for (let i = 1; i < reps.length; i++) {
    reps[i] = reps[i] + reps[i - 1];
  }

  // every value represent the places in the count array
  for (let i = array.length - 1; i >= 0; i--) {
    const value = array[i];
    const index = reps[value];

    // place the value in the correct position (acc count), and decrease the count by 1
    result[index] = value;
    reps[value] = reps[value] - 1;
  }

  return result.filter((i) => !!i);
}

export default countingSort;
