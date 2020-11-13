/**
 * Preorder traversal O(n).
 * 
 * @author David Lacedonia <davidlacedonia@gmail.com>
 * 
 * @param {object} tree Binary tree
 * @param {array} acc Accumulator
 * 
 * @return {array} Traversed array
 */
function preorderTraversal(tree, acc = []) {
  if (tree) {
    acc.push(tree.value);
    preorderTraversal(tree.left, acc);
    preorderTraversal(tree.right, acc);
  }

  return acc;
}

export default preorderTraversal;
