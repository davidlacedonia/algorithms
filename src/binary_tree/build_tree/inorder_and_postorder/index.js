export function buildTree(inorder, postorder) {
    if (!inorder.length) return null;
    const val = postorder[postorder.length - 1];
    const pivot = inorder.indexOf(val);

    return {
        val,
        left: buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot)),
        right: buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1)),
    };
}
