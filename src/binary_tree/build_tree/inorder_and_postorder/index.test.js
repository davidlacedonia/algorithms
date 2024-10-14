import { buildTree } from '.';

test('Build tree from inorder and postorder', () => {
    expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toEqual({
        val: 3,
        left: {
            val: 9,
            left: null,
            right: null,
        },
        right: {
            val: 20,
            left: {
                val: 15,
                left: null,
                right: null,
            },
            right: {
                val: 7,
                left: null,
                right: null,
            },
        },
    });
});
