import { TREE, REVERSED_TREE } from '../../data';
import postorderTraversal from './index';

test('postorder traversal', () => {
    const result = postorderTraversal(TREE);
    expect(result).toStrictEqual(REVERSED_TREE);
});
