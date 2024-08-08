export function rightSideView(root) {
    let queue = [];
    let output = [];

    if (root?.val) queue.push(root);
    while (queue.length) {
        const length = queue.length;
        const element = queue[length - 1];
        output.push(element.val);
        for (let i = 0; i < length; i++) {
            const el = queue.shift();
            if (el.left) queue.push(el.left);
            if (el.right) queue.push(el.right);
        }
    }

    return output;
}
