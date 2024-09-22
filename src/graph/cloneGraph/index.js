export function cloneGraph(node) {
    let visited = {};

    const visit = (_node) => {
        if (visited[_node.val]) return visited[_node.val];

        const newNode = { val: _node.val, neighbors: [] };
        visited[_node.val] = newNode;

        for (let neighbor of _node.neighbors) {
            newNode.neighbors.push(visit(neighbor));
        }

        return newNode;
    };

    if (!node) return;
    return visit(node);
}
