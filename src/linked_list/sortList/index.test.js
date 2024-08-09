import { sortList } from '.';

test('Sort list', () => {
    const output = sortList({
        val: 4,
        next: { val: 2, next: { val: 1, next: { val: 3 } } },
    });
    expect(output).toEqual({
        val: 1,
        next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
    });
});
