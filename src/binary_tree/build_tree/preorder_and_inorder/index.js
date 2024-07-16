export function buildTree(preorder, inorder) {
    if (!inorder.length || !preorder.length) return null;

    let head = { val: preorder[0] };
    let currIndex = inorder.indexOf(head.val);
    head.left = buildTree(preorder.slice(1), inorder.slice(0, currIndex));
    head.right = buildTree(
        preorder.slice(currIndex + 1),
        inorder.slice(currIndex + 1)
    );

    return head;
}
