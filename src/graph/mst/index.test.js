import minCostConnectPoints from './index';

test('Min cost connect points (MST) 1', () => {
    const edges = [
        [0, 0],
        [2, 2],
        [3, 10],
        [5, 2],
        [7, 0],
    ];
    expect(minCostConnectPoints(edges)).toEqual(20);
});

test('Min cost connect points (MST) 2', () => {
    const edges = [
        [3, 12],
        [-2, 5],
        [-4, 1],
    ];
    expect(minCostConnectPoints(edges)).toEqual(18);
});
