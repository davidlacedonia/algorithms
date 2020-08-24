const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");
const insertionSort = require("../insertion_sort");

/**
 * Bucket sort O(n+k).
 *
 * Stores elements in buckes (based on some index),
 * sorts each bucket, and returns the union of them all.
 */
function bucketSort(array, LARGEST = 10) {
  const buckets = [];
  let result = [];

  // optimal size for bucket
  // possible largest element / amount of elements
  const size = LARGEST / array.length;

  for (let i = 0; i < array.length; i++) {
    // calculate the index of bucket (value / size)
    const index = Math.floor(array[i] / size);
    buckets[index] = [...(buckets[index] || []), array[i]];
  }

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i]) {
      // use insertion sort, to sort each bucket
      const sortedBucket = insertionSort(buckets[i]);
      result.push(...sortedBucket);
    }
  }

  return result;
}

const result = bucketSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
