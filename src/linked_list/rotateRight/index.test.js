import { rotateRight } from '.';

test('Rotate right', () => {
    expect(
        rotateRight(
            {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: {
                                val: 5,
                            },
                        },
                    },
                },
            },
            2
        )
    ).toEqual({
        val: 4,
        next: {
            val: 5,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: null,
                    },
                },
            },
        },
    });
});
