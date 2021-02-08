/**
 * Inorder traversal O(n).
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {object} tree Binary tree
 * @param {array} acc Accumulator
 *
 * @return {array} Traversed array
 */
function inorderTraversal(tree, acc = []) {
  if (tree) {
    inorderTraversal(tree.prev, acc);
    acc.push(tree.data);
    inorderTraversal(tree.next, acc);
  }

  return acc;
}

export default inorderTraversal;
