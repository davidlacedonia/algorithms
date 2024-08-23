import { searchMatrix } from '.';

test('Search matrix', () => {
    const output = searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        3
    );
    expect(output).toEqual(3);
});
