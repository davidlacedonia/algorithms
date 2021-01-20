import insertionSort from '../insertion_sort';
import mergeSort from '../merge_sort';

/**
 * Tim sort O(n log n).
 *
 * Divide array into blocks (runs),
 * sorts every run using insertion sort and then,
 * merge sorted runs one by one using merge sort.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} array unsorted elements
 * @param {number} RUN_SIZE size un runs
 *
 * @return {array} sorted elements
 */
function timSort(array, RUN_SIZE = 3) {
  let blocks = [];
  let mergedBlocks = [];

  if (!Array.isArray(array)) return [];

  for (let i = 0; i <= array.length; i += RUN_SIZE) {
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
