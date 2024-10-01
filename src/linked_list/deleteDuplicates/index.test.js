import { deleteDuplicates } from '.';

test('Delete duplicates', () => {
    const output = deleteDuplicates({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 4,
                            next: {
                                val: 5,
                            },
                        },
                    },
                },
            },
        },
    });
    expect(output).toEqual({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 5,
            },
        },
    });
});
