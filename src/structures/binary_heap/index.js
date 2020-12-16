/**
 * Binary heap.
 *
 * The root of the tree will be in position 1 of the array.
 * The left child of any given node at position n, will be located at 2n.
 * The right child of a node at position n will be located at position 2n + 1.
 * The parent of a node at position n is at position n/2.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @returns {object} items array, push and pop methods
 */
function BinaryHeap() {
  let items = [null];

  return {
    items,
    /**
     * Each element is inserted at the element in the tree
     * such that it remains a complete binary tree.
     */
    push(value) {
      items.push(value);

      let index = items.length - 1;
      let parentIndex = Math.floor(index / 2);
      while (parentIndex > 0 && items[parentIndex] >= items[index]) {
        let aux = items[parentIndex];
        items[parentIndex] = items[index];
        items[index] = aux;

        index = parentIndex;
        parentIndex = Math.floor(index / 2);
      }

      return value;
    },
    /**
     * Taking the topmost (first) element and then adjusting the heap so that,
     * it remains a complete binary tree, and
     * it remains a valid min heap.
     *
     * This is done by placing the last element in the heap
     * as the topmost one and then “bubble it down” in order
     * to conserve the min-heap property.
     */
    pop() {
      let popped = items.splice(1, 1)[0];
      let last = items.pop();
      items = [items[0], last, ...items.slice(1)];

      let index = 1;
      let leftIndex = index * 2;
      let rightIndex = index * 2 + 1;
      while (
        items[index] >= items[leftIndex] ||
        items[index] >= items[rightIndex]
      ) {
        let nextIndex =
          items[leftIndex] < items[rightIndex] ? leftIndex : rightIndex;
        let aux = items[nextIndex];
        items[nextIndex] = items[index];
        items[index] = aux;

        index = nextIndex;
        leftIndex = index * 2;
        rightIndex = index * 2 + 1;
      }

      this.items = items;
      return popped;
    },
  };
}

export default BinaryHeap;
