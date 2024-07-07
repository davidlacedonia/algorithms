export function levelOrder(root) {
    const queue = [root];
    const levels = [];

    while (queue.length) {
        const length = queue.length;
        const level = [];

        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        levels.push(level);
    }

    return levels;
}
