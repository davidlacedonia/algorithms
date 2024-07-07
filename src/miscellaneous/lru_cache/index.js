/**
 * LRU Cache.
 *
 * Least recent used cache.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} capacity Limit of elements
 *
 * @return {object} get and put LRU methods
 */
function LRUCache(capacity) {
    let values = new Array(capacity);

    return {
        get(value) {
            const found = values.find((item) => item === value);

            if (found) {
                values = values.filter((v) => v !== found);
                values.push(value);
            }

            return found || -1;
        },

        put(value) {
            if (values.length >= capacity) {
                if (values.find((item) => item === value)) {
                    values = values?.filter((v) => v !== value);
                } else {
                    values.splice(0, 1);
                }
            }

            values.push(value);
        },
    };
}

export default LRUCache;
