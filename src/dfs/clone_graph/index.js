function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * Clone graph
 *
 * Stack/DFS
 *
 * @author David lacedonia <davidlacedonia@gmail.com>
 *
 * @param {object} node
 *
 * @return {object} node
 */
var cloneGraph = function (node) {
    let visited = {};

    const clone = (curr) => {
        if (!curr) return;

        if (visited[curr.val]) return visited[curr.val];

        const node = new Node(curr.val);
        visited[node.val] = node;

        for (let neighbor of curr.neighbors) {
            node.neighbors.push(clone(neighbor));
        }

        return node;
    };

    return clone(node);
};

export default cloneGraph;
