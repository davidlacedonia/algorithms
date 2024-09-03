import { rotateImage } from '.';

test('Rotate image', () => {
    const output = rotateImage([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]);
    expect(output).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);
});
