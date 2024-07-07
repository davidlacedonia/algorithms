export function invertTree(root) {
    if (!root) return root;
    invertTree(root.left);
    invertTree(root.right);

    const aux = root.right;
    root.right = root.left;
    root.left = aux;

    return root;
}
