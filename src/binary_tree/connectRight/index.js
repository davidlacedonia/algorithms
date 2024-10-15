export function connect(root) {
    let queue = [root];

    while (queue.length) {
        const length = queue.length;

        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        for (let i = 0; i < queue.length; i++) {
            const curr = queue[i];
            const next = queue[i + 1] || null;
            curr.next = next;
        }
    }

    return root;
}
