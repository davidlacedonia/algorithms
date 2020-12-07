/**
 * Node.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {any} data node data value
 */
function Node(data) {
  return {
    data,
    next: null,
  };
}

export default Node;
