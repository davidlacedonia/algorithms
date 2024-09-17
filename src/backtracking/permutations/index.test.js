import { permute } from '.';

test('Permute', () => {
    const output = permute([1, 2, 3]);
    expect(output).toEqual([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
    ]);
});
