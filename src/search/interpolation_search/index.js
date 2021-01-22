/**
 * Calculates position by assuming linearity.
 *
 * @param {object} arr array of elements
 * @param {number} start start index
 * @param {number} end end index
 * @param {number} el element to be found
 *
 * @return {number} new position
 */
function getPosition(arr, start, end, el) {
  const a = start;
  const b = end - start;
  const c = arr[end] - arr[start];
  const d = el - arr[start];

  return Math.floor(a + (b / c) * d);
}

/**
 * Interpolation search O(log (log n)).
 *
 * Checks on different locations using a formula,
 * based on the value of the element being searched.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {object} array array of elements
 * @param {number} element element to be bound
 *
 * @return {number} index of element
 */
function interpolationSearch(array = [], element) {
  let start = 0;
  let end = array.length - 1;
  let position = getPosition(array, start, end, element);

  if (!Array.isArray(array)) return null;

  while (start <= end && element >= array[start] && element <= array[end]) {
    if (array[position] === element) {
      return position;
    }

    if (array[position] < element) {
      start = position + 1;
    } else {
      end = position - 1;
    }

    position = getPosition(array, start, end, element);
  }

  return null;
}

export default interpolationSearch;
