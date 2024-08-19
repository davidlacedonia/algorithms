import { merge } from '.';

test('Merge intervals', () => {
    const output = merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ]);
    expect(output).toEqual([
        [1, 6],
        [8, 10],
        [15, 18],
    ]);
});
