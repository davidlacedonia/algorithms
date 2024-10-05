import { kthSmallest } from '.';

test('Kth smallest', () => {
    expect(
        kthSmallest(
            {
                val: 3,
                left: {
                    val: 1,
                    right: {
                        val: 2,
                    },
                },
                right: {
                    val: 4,
                },
            },
            1
        )
    ).toEqual(1);

    expect(
        kthSmallest(
            {
                val: 5,
                left: {
                    val: 3,
                    left: {
                        val: 2,
                        left: {
                            val: 1,
                        },
                    },
                    right: {
                        val: 4,
                    },
                },
                right: {
                    val: 6,
                },
            },
            3
        )
    ).toEqual(3);
});
