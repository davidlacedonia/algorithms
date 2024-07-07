import { invertTree } from './invert.js';

test('invert binary tree', () => {
    const result = invertTree({
        val: 4,
        left: {
            val: 2,
            left: {
                val: 1,
            },
            right: {
                val: 3,
            },
        },
        right: {
            val: 7,
            left: {
                val: 6,
            },
            right: {
                val: 9,
            },
        },
    });

    expect(result).toEqual({
        val: 4,
        left: {
            val: 7,
            left: {
                val: 9,
            },
            right: {
                val: 6,
            },
        },
        right: {
            val: 2,
            left: {
                val: 3,
            },
            right: {
                val: 1,
            },
        },
    });
});
