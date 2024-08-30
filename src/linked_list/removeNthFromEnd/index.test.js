import { removeNthFromEnd } from '.';

test('Remove nth from end', () => {
    expect(
        removeNthFromEnd(
            {
                val: 1,
                next: {
                    val: 2,
                    next: { val: 3, next: { val: 4, next: { val: 5 } } },
                },
            },
            2
        )
    ).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: { val: 5 } } } });
});
