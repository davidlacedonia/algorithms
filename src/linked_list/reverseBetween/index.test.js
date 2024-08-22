import { reverseBetween } from '.';

test('Reverse between', () => {
    const output = reverseBetween(
        {
            val: 1,
            next: {
                val: 2,
                next: { val: 3, next: { val: 4, next: { val: 5 } } },
            },
        },
        2,
        4
    );
    expect(output).toEqual({
        val: 1,
        next: {
            val: 4,
            next: { val: 3, next: { val: 2, next: { val: 5 } } },
        },
    });
});
