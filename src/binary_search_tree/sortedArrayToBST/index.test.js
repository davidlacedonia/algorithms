import { sortedArrayToBST } from '.';

test('Sorted array to BST', () => {
    const output = sortedArrayToBST([-10, -3, 0, 5, 9]);
    console.log(output);
    expect(output).toEqual({
        val: 0,
        left: {
            val: -3,
            left: { val: -10, left: null, right: null },
            right: null,
        },
        right: {
            val: 9,
            left: { val: 5, left: null, right: null },
            right: null,
        },
    });
});
