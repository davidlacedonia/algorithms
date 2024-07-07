import BinaryTree from './index';
import preorderTraversal from '../../binary_tree/preorder_traversal';
import { ORDERED_TREE } from '../../data';

test('Binary tree creation', () => {
    const binaryTree = new BinaryTree();
    binaryTree.insert(1);
    binaryTree.insert(2);
    binaryTree.insert(3);

    const orderedTree = preorderTraversal(binaryTree.get());
    expect(orderedTree).toEqual(ORDERED_TREE);
});
