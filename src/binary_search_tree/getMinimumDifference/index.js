export function getMinimumDifference(root) {
    let numbers = [];
    function inorder(curr) {
        if (!curr) return;
        inorder(curr.left);
        numbers.push(curr.val);
        inorder(curr.right);
    }
    inorder(root);

    let min = Infinity;
    for (let i = 0; i < numbers.length - 1; i++) {
        min = Math.min(min, Math.abs(numbers[i] - numbers[i + 1]));
    }
    return min;
}
