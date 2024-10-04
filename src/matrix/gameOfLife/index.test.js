import { gameOfLife } from '.';

test('Game of life', () => {
    const output = gameOfLife([
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ]);

    expect(output).toEqual([
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
    ]);
});
