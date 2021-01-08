import insertionSort from "../insertion_sort";

const storeInBuckets = (array, size) => {
  let buckets = [];
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor(array[i] / size);
    buckets[bucketIndex] = [...(buckets[bucketIndex] || []), array[i]];
  }
  return buckets;
};

/**
 * Bucket sort O(n+k).
 *
 * Stores elements in buckets (based on some index),
 * then sorts each bucket, and returns the union of them all.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array unsorted elements
 * @param {number} LARGEST possible largest element / amount of elements
 *
 * @returns {array} sorted elements
 */
function bucketSort(array = [], LARGEST = 10) {
  const size = LARGEST / array.length;

  if (!Array.isArray(array)) return [];

  const buckets = storeInBuckets(array, size);
  const sortedBuckets = buckets?.map((bucket) => insertionSort(bucket));
  return sortedBuckets?.reduce((prev, next) => [...prev, ...next]);
}

export default bucketSort;
