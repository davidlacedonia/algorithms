import Node from "../node";

/**
 * Queue.
 *
 * First-in first-out ordering.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 */
function Queue() {
  let first = null,
    last = null;

  return {
    add: (value) => {
      const node = new Node(value);
      if (last) {
        last.next = node;
      }
      last = node;
      if (!first) {
        first = last;
      }
    },
    remove: () => {
      if (!first) return null;
      const data = first.data;
      first = first.next;
      if (!first) last = null;
      return data;
    },
    peek: () => {
      if (!first) return null;
      return first.data;
    },
    isEmpty: () => {
      return !first;
    },
  };
}

export default Queue;
