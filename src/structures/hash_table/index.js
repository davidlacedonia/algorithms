const MAX_LENGTH = 10;

const getIndexFromHashCode = (hashCode) => (hashCode * 37) % MAX_LENGTH;

const getHashCodeFromKey = (key) => {
  let total = 0;
  for (let letter of key) {
    total += letter.charCodeAt();
  }
  return +total;
};

const getIndexFromKey = (key) => {
  const hashCode = getHashCodeFromKey(key);
  return getIndexFromHashCode(hashCode);
};

/**
 * Hash table.
 *
 * Computes hash-key from key,
 * then computes index from hash-key,
 * and stores the value in an array (or linked list) at given index.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @returns {object} get and put methods
 */
function HashTable() {
  let hashTable = {};
  return {
    get(key) {
      const index = getIndexFromKey(key);
      return hashTable[index].find((element) => element.key === key).value;
    },
    put(key, value) {
      const index = getIndexFromKey(key);
      hashTable[index] = [...(hashTable[index] || []), { key, value }];
      return null;
    },
  };
}

export default HashTable;
