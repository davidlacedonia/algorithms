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
    postorderTraversal(tree.prev, acc);
    postorderTraversal(tree.next, acc);
    acc.push(tree.data);
  }

  return acc;
}

export default postorderTraversal;
