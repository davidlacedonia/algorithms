import { combine } from '.';

test('Combine', () => {
    const output = combine(4, 2);
    expect(output).toEqual([
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
    ]);
});
