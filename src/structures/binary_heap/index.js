/**
 * Binary heap.
 *
 * The root of the tree will be in position 1 of the array.
 * The left child of any given node at position n, will be located at 2n.
 * The right child of a node at position n will be located at position 2n + 1.
 * The parent of a node at position n is at position n/2.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
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
      let removedEl = items.splice(1, 1);

      let last = items.pop();
      items = [items[0], last, ...items.slice(1)];

      let index = 1;
      let childLeftIndex = index * 2;
      let childRightIndex = index * 2 + 1;
      while (
        items[index] >= items[childLeftIndex] ||
        items[index] >= items[childRightIndex]
      ) {
        if (
          items[childLeftIndex] &&
          items[childLeftIndex] < items[childRightIndex] &&
          items[index] >= items[childLeftIndex]
        ) {
          let aux = items[childLeftIndex];
          items[childLeftIndex] = items[index];
          items[index] = aux;

          index = childLeftIndex;
          childLeftIndex = index * 2;
          childRightIndex = index * 2 + 1;
        } else if (
          items[childRightIndex] &&
          items[childRightIndex] < items[childLeftIndex] &&
          items[index] >= items[childRightIndex]
        ) {
          let aux = items[childRightIndex];
          items[childRightIndex] = items[index];
          items[index] = aux;

          index = childRightIndex;
          childLeftIndex = index * 2;
          childRightIndex = index * 2 + 1;
        }
      }

      this.items = items;
      return removedEl[0];
    },
  };
}

export default BinaryHeap;
