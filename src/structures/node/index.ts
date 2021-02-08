/**
 * Node
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {any} data node data value
 */
class Node {
  data: number;
  prev?: Node;
  next?: Node;

  constructor(value: number, prev?: Node, next?: Node) {
    this.data = value;
    this.prev = prev;
    this.next = next;
  }
}

export default Node;
