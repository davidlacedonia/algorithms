function Node(val, next) {
  return {
    value: val || 0,
    next: next || null,
  };
}

/**
 * Generates linked list recursively
 */
function generateLinkedList(i, previous) {
  if (i <= 0) return previous;

  let node = Node(i, null);
  if (previous) {
    previous.next = node;
  }

  generateLinkedList(i - 1, node);
  return node;
}

module.exports = {
  generateLinkedList: generateLinkedList,
};
