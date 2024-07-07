/**
 * Flatten list O(n).
 *
 * Loops array of elements recursively.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} list array of elements
 *
 * @returns {array} flattened array
 */
function flattenList(list = []) {
    let flattened = [];

    if (!Array.isArray(list)) return null;

    for (let element of list) {
        if (Array.isArray(element)) {
            flattened.push(...flattenList(element));
        } else {
            flattened.push(element);
        }
    }

    return flattened;
}

export default flattenList;
