function helper(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
        left.val === right.val &&
        helper(left.left, right.right) &&
        helper(left.right, right.left)
    );
}

export function isSymmetric(root) {
    if (!root) return true;
    return helper(root.left, root.right);
}
