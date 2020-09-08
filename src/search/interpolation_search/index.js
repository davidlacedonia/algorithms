/**
 * Calculates position with formula.
 *
 * @param {object} arr Array of elements
 * @param {number} start Start index
 * @param {number} end End index
 * @param {number} el Element to be found
 *
 * @return {number} New position
 */
function getPosition(arr, start, end, el) {
  let a = start;
  let b = end - start;
  let c = arr[end] - arr[start];
  let d = el - arr[start];

  return Math.floor(a + (b / c) * d);
}

/**
 * Interpolation search O(log log n).
 *
 * Checks on different locations (position),
 * based on the value of the element being searched.
 *
 * @param {object} array Array of elements
 * @param {number} element Element to be bound
 *
 * @return {number} Index of element
 */
function interpolationSearch(array, element) {
  let start = 0;
  let end = array.length - 1;
  let position = getPosition(array, start, end, element);

  // repeats until we have elements in the subarray,
  // element is greater than the one on the starting point
  // and element is lesser than the one on end point
  while (start <= end && element >= array[start] && element <= array[end]) {
    if (array[position] === element) {
      return position;
    } else if (array[position] < element) {
      start = position + 1;
    } else {
      end = position - 1;
    }

    position = getPosition(array, start, end, element);
  }

  return -1;
}

export default interpolationSearch;