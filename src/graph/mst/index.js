import UnionFind from '../../structures/union_find';

/**
 * Minimum spaning tree (min cost)
 * 
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number[][]} points
 *
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let edges = [];

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];

    for (let j = i + 1; j < points.length; j++) {
      const [_x, _y] = points[j];

      const distance = Math.abs(x - _x) + Math.abs(y - _y);
      edges.push({ start: i, end: j, distance });
    }
  }

  const sortedEdges = edges.sort((a, b) => a.distance - b.distance);

  let uf = new UnionFind(points.length);
  let mstCost = 0;
  let edgesUsed = 0;

  for (let i = 0; i < sortedEdges.length && edgesUsed < points.length - 1; i++) {
    const { start, end, distance } = sortedEdges[i];

    if (uf.union(start, end)) {
      mstCost += distance;
      edgesUsed++;
    }
  }

  return mstCost;
};

export default minCostConnectPoints;
