import { rightSideView } from '.';

test('Right side view', () => {
    const output = rightSideView({
        val: 1,
        left: { val: 2, right: { val: 5, right: { val: 6 } } },
        right: { val: 3, left: { val: 4 } },
    });
    expect(output).toEqual([1, 3, 4, 6]);
});
