import dijkstra from './index';

test('dijkstra min path', () => {
    expect(
        dijkstra(
            [
                [2, 1, 1],
                [2, 3, 1],
                [3, 4, 1],
            ],
            4,
            2
        )
    ).toEqual(2);
});
