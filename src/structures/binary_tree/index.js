function TreeNode(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

const findNodeToInsert = (root, node) => {
  if (node.value === root.value) return undefined;

  if (node.value > root.value) {
    if (!root.right) {
      root.right = node;
    } else {
      findNodeToInsert(root.right, node);
    }
  } else {
    if (!root.left) {
      root.left = node;
    } else {
      findNodeToInsert(root.left, node);
    }
  }
};

/**
 * Binary Tree.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @returns {object} get and insert methods
 *
 */
function BinaryTree() {
  let root = null;

  return {
    get() {
      return root;
    },
    insert(value) {
      const node = new TreeNode(value);

      if (!root) {
        root = node;
        return value;
      }

      findNodeToInsert(root, node);
      return value;
    },
  };
}

export default BinaryTree;
