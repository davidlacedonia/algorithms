import { exist } from '.';

test('Word search', () => {
    expect(
        exist(
            [
                ['A', 'B', 'C', 'E'],
                ['S', 'F', 'C', 'S'],
                ['A', 'D', 'E', 'E'],
            ],
            'ABCCED'
        )
    ).toEqual(true);
});
