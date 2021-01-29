const findLeastFrequentIndex = (values = []) => {
  let leastIndex = null;
  let leastFrequence = null;

  values.forEach((value, index) => {
    if (value.frequence < leastFrequence || leastFrequence === null) {
      leastIndex = index;
      leastFrequence = value.frequence;
    }
  });

  return leastIndex;
};

const removeLeastFrequentUsed = (values = []) => {
  const leastFrequentIndex = findLeastFrequentIndex(values);
  return values.splice(leastFrequentIndex, 1);
};

/**
 * LFU Cache.
 *
 * Least frequent use cache.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} capacity Limit of elements
 *
 * @returns {object} get and put LFU cache methods
 */
function LFUCache(capacity = 1) {
  let values = [];

  return {
    get: (value) => {
      const index = values.findIndex((item) => item.value === value);

      if (index < 0) return null;

      values[index].frequence += 1;
      return values[index].value;
    },
    put: (value) => {
      if (values.length >= capacity) {
        removeLeastFrequentUsed(values);
      }

      values.push({ value, frequence: 1 });
    },
  };
}

export default LFUCache;
