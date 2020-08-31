/**
 * Jump search O(sqrt(n))
 *
 * @param {object} array Array of values
 * @param {number} element Element to search
 *
 * @return {number} Index of element
 */
function jumpSearch(array, element) {
  // jump is the square root of the amount of elements
  const jump = Math.floor(Math.sqrt(array.length));

  // loop through the array, every "jump" size
  for (let i = 0; i < array.length; i += jump) {
    // return index if found
    if (array[i] === element) {
      return i;
    } else if (array[i] > element) {
      // if value is greater than the element
      // do a linear search backwards until found
      for (let j = i; j > i - jump; j--) {
        if (array[j] === element) {
          return j;
        }
      }
    }
  }

  return -1;
}

module.exports = jumpSearch;
