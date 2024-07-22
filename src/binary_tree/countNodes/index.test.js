import { countNodes } from '.';

test('Count nodes', () => {
    const output = countNodes({
        val: 1,
        left: { val: 2, left: { val: 4 }, right: { val: 5 } },
        right: { val: 3, left: { val: 6 } },
    });
    expect(output).toEqual(6);
});
