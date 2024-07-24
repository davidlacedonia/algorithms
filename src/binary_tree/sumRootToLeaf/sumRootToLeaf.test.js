import sumRootToLeaf from './sumRootToLeaf.js';

test('Sum root to leaf numbers', () => {
    const result = sumRootToLeaf({
        val: 1,
        left: {
            val: 2,
        },
        right: {
            val: 3,
        },
    });

    expect(result).toStrictEqual(25);
});

test('Sum root to leaf numbers', () => {
    const result = sumRootToLeaf({
        val: 4,
        left: {
            val: 9,
            left: {
                val: 5,
            },
            right: {
                val: 1,
            },
        },
        right: {
            val: 0,
        },
    });

    expect(result).toStrictEqual(1026);
});
