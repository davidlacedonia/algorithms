/**
 * Shortest path fast algorithm
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} edges
 * @param {number[][]} points
 * @param {number} dst
 *
 * @return {number} shortest distance
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var shortestPathFastAlgorithm = function (n, flights, dst) {
  let output = Number.MAX_SAFE_INTEGER;
  let graph = {};
  let vertexs = new Array(n).fill(Infinity);
  let queue = [0];
  let visited = { 0: true };
  vertexs[0] = 0;

  for (let flight of flights) {
    const [origin, target, distance] = flight;
    graph[origin] = [...(graph[origin] || []), { target, distance }];
  }

  while (queue.length) {
    const curr = queue.shift();
    visited[curr] = false;

    for (let neighbour of graph[curr] || []) {
      const { target, distance } = neighbour;
      const totalDistance = distance + vertexs[curr];

      if (visited[target]) continue;

      if (vertexs[target] > totalDistance) {
        vertexs[target] = totalDistance;
        queue.push(target);
        visited[target] = true;
      }
    }
  }

  output = vertexs[dst];
  return output === Number.MAX_SAFE_INTEGER ? -1 : output;
};

export default shortestPathFastAlgorithm;
