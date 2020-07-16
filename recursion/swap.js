const { generateLinkedList } = require("../node");

/**
 * Swap adjacents elements on linked list recursively. O(n)
 *
 * 4 -> 3 -> 2 -> 1
 * into
 * 3 -> 4 -> 1 -> 2
 */
function swap(head) {
  if (head && head.next) {
    let aux = head.next.value;
    head.next.value = head.value;
    head.value = aux;
  }

  if (head && head.next) {
    swap(head.next.next);
  }
  return head;
}

const head = generateLinkedList(4);
const swapped = swap(head);
console.log(swapped);
