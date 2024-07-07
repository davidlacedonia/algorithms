import shortestPathFastAlgorithm from './index';

test('Shortest distance first example', () => {
    const edges = [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200],
    ];
    expect(shortestPathFastAlgorithm(4, edges, 3)).toEqual(700);
});

test('Shortest distance between second example', () => {
    const edges = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
    ];
    expect(shortestPathFastAlgorithm(3, edges, 2)).toEqual(500);
});
