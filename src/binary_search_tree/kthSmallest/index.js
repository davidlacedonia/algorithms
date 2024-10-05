export function kthSmallest(root, k, acc = []) {
    if (!root) return;
    kthSmallest(root.left, k, acc);
    acc.push(root.val);
    kthSmallest(root.right, k, acc);
    return acc[k - 1];
}
