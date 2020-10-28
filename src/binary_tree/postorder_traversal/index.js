/**
 * Postorder traversal O(n).
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {object} tree Binary tree
 * @param {array} acc Accumulator
 *
 * @return {array} Traversed array
 */
function postorderTraversal(tree, acc = []) {
  if (tree) {
    postorderTraversal(tree.left, acc);
    postorderTraversal(tree.right, acc);
    acc.push(tree.val);
  }

  return acc;
}

export default postorderTraversal;
