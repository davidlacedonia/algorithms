import { mergeTwoList } from '.';

test('Merge two list', () => {
    const output = mergeTwoList(
        { val: 1, next: { val: 2, next: { val: 4 } } },
        { val: 1, next: { val: 3, next: { val: 4 } } }
    );
    expect(output).toEqual({
        val: 1,
        next: {
            val: 1,
            next: {
                val: 2,
                next: { val: 3, next: { val: 4, next: { val: 4 } } },
            },
        },
    });
});
