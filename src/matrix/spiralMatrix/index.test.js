import { spiralOrder } from '.';

test('Spiral order', () => {
    const output = spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]);

    expect(output).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

test('Spiral order', () => {
    const output = spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ]);

    expect(output).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});
