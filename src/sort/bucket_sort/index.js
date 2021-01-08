import insertionSort from "../insertion_sort";

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
  const buckets = [];
  let result = [];

  if (!Array.isArray(array)) return [];

  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor(array[i] / size);
    buckets[bucketIndex] = [...(buckets[bucketIndex] || []), array[i]];
  }

  for (let i = 0; i < buckets.length; i++) {
    const sortedBucket = insertionSort(buckets[i]);
    result.push(...sortedBucket);
  }

  return result;
}

export default bucketSort;
