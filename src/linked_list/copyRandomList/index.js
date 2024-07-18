export function copyRandomList(head) {
    let hash = new Map();

    const copy = (node) => {
        if (!node) return null;
        if (hash.has(node)) return hash.get(node);
        const newNode = { val: node.val };
        hash.set(node, newNode);
        newNode.next = copy(node.next);
        newNode.random = copy(node.random);
        return newNode;
    };

    return copy(head);
}
