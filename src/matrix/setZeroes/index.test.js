import { setZeroes } from '.';

test('Set zeroes', () => {
    const output = setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ]);
    expect(output).toEqual([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
    ]);
});
