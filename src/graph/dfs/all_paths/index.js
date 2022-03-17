/**
 * All paths (in acyclic graph)
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number[][]} graph
 *
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let output = [];

  const dfs = (curr = 0, path = []) => {
    path.push(curr);
    if (curr === graph.length - 1) output.push(path);
    for (let neighbour of graph[curr]) {
      dfs(neighbour, [...path]);
    }
  };

  dfs();
  return output;
};

export default allPathsSourceTarget;
