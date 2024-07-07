/**
 * Find path
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 *
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    let visited = {};
    let graph = [];
    let stack = [];

    for (let edge of edges) {
        const [x, y] = edge;
        graph[x] = [...(graph[x] || []), y];
        graph[y] = [...(graph[y] || []), x];
    }

    stack.push(source);
    visited[source] = true;

    while (stack.length) {
        let current = stack.pop();

        if (current === destination) return true;

        for (let neighbour of graph[current]) {
            if (!visited[neighbour]) {
                visited[current] = true;
                stack.push(neighbour);
            }
        }
    }

    return false;
};

export default validPath;
