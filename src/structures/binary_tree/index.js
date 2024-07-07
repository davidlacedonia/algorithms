import Node from '../node';

const findNodeToInsert = (root, node) => {
    if (node.data === root.data) return undefined;

    if (node.data > root.data) {
        if (!root.next) {
            root.next = node;
        } else {
            findNodeToInsert(root.next, node);
        }
    } else {
        if (!root.prev) {
            root.prev = node;
        } else {
            findNodeToInsert(root.prev, node);
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
            const node = new Node(value);

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
