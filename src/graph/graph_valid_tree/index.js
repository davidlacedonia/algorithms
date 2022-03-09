/**
 * Valid graph tree
 * 
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} n
 * @param {number[][]} edges
 * 
 * @return {boolean}
 */
function validGraphTree (n, edges) {
  const adjacencyList = createAdjacencyList(n, edges);
  let seen = { 0: true };
  let stack = [0];

  while (stack.length) {
    const node = stack.pop();
    for (let neighbour of adjacencyList[node] || []) {
      if (seen[neighbour]) {
        return false;
      }

      stack.push(neighbour);
      seen[neighbour] = true;

      // remove actual node from neighbour, to prevent revisiting on undirected graphs
      adjacencyList[neighbour] = adjacencyList[neighbour].filter((i) => i !== node);
    }
  }

  return Object.keys(seen).length === n;
};

/**
 * Adjacenct list
 * 
 * List of sub-lists
 * where each sub-list is the list of the immediate neighbours for the i'th node
 */
const createAdjacencyList = (n, edges) => {
  let list = [];

  for (let edge of edges) {
    const [x, y] = edge;
    list[x] = [...(list[x] || []), y];
    list[y] = [...(list[y] || []), x];
  }

  return list;
};

export default validGraphTree
