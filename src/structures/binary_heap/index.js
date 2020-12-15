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
    pop() {
      return null;
    },
  };
}

export default BinaryHeap;
