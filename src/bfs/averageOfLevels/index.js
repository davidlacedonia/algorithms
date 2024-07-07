export function averageOfLevels(root) {
    let queue = [root];
    let output = [];

    while (queue.length) {
        let level = 0;
        let amount = queue.length;

        for (let i = 0; i < amount; i++) {
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            level += curr.val;
        }

        output.push(level / amount);
    }

    return output;
}
