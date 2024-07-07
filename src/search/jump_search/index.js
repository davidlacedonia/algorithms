/**
 * Jump search O(sqrt(n))
 *
 * Tries to check fewer elements by jumping ahead fixed steps.
 * Jump step is the square root of the number of elements.
 * If the values is greater than the element,
 * do a linear search backwards until found.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array sorted values
 * @param {number} el Element to search
 *
 * @return {number} Index of element
 */
function jumpSearch(array = [], el) {
    const jump = Math.floor(Math.sqrt(array.length));

    if (!Array.isArray(array)) return null;

    for (let i = 0; i < array.length; i += jump) {
        if (array[i] === el) {
            return i;
        } else if (array[i] > el) {
            for (let j = i; j > i - jump; j--) {
                if (array[j] === el) {
                    return j;
                }
            }
        }
    }

    return null;
}

export default jumpSearch;
