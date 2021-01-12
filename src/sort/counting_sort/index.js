const getReps = (array) => {
  let reps = [];
  array.forEach((value) => {
    reps[value] = (reps[value] || 0) + 1;
  });
  return reps;
};

const accumulateReps = (reps) => {
  const acc = [...reps];
  for (let i = 1; i < acc.length; i++) {
    acc[i] = (acc[i] || 0) + (acc[i - 1] || 0);
  }
  return acc;
};

const placeAccValuesAtRightIndex = (array, accumulatedReps) => {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const value = array[i];
    const index = accumulatedReps[value];
    result[index] = value;
    accumulatedReps[value] = accumulatedReps[value] - 1;
  }
  return result;
};

/**
 * Counting sort O(n+k).
 *
 * Stores repetitions in array, using the value as index.
 * Every value represent the places in the count array.
 * The accumulated reps of every value, represents the order,
 * on the result sorted array.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array unordered array
 *
 * @return {array} ordered array
 */
function countingSort(array = []) {
  if (!Array.isArray(array)) return [];

  const reps = getReps(array);
  const accumulatedReps = accumulateReps(reps);
  const sortedValues = placeAccValuesAtRightIndex(array, accumulatedReps);
  return sortedValues.filter((i) => !!i);
}

export default countingSort;
