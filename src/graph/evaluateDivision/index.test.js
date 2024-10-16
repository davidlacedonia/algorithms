import { calcEquation } from '.';

test('Evaluate division', () => {
    expect(
        calcEquation(
            [
                ['a', 'b'],
                ['b', 'c'],
            ],
            [2, 3],
            [
                ['a', 'c'],
                ['b', 'a'],
                ['a', 'e'],
                ['a', 'a'],
                ['x', 'x'],
            ]
        )
    ).toEqual([6, 0.5, -1, 1, -1]);
});
