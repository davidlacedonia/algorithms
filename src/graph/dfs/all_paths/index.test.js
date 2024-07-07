import allPathsSourceTarget from './index';

test('All paths A', () => {
    expect(allPathsSourceTarget([[1, 2], [3], [3], []])).toEqual([
        [0, 1, 3],
        [0, 2, 3],
    ]);
});

test('All paths B', () => {
    expect(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])).toEqual([
        [0, 4],
        [0, 3, 4],
        [0, 1, 3, 4],
        [0, 1, 2, 3, 4],
        [0, 1, 4],
    ]);
});
