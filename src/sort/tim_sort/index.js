import insertionSort from "../insertion_sort";
import mergeSort from "../merge_sort";

/**
 * Tim sort O(n log n).
 *
 * Divide array into blocks (runs).
 * Sort every run using insertion sort.
 * Merge sorted runs one by one using merge sort.
 */
function timSort(array) {
  const run = 3;
  let blocks = [];
  let mergedBlocks = [];

  for (let i = 0; i <= array.length; i += run) {
    const block = array.slice(i, i + 3);
    const sortedBlock = insertionSort(block);
    blocks.push(sortedBlock);
  }

  for (let i = 0; i < blocks.length; i++) {
    mergedBlocks = mergeSort([...mergedBlocks, ...blocks[i]]);
  }

  return mergedBlocks;
}

export default timSort;
