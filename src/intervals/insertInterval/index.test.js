import { insert } from '.';

test('Insert interval', () => {
    const output = insert(
        [
            [1, 3],
            [6, 9],
        ],
        [2, 5]
    );
    expect(output).toEqual([
        [1, 5],
        [6, 9],
    ]);
});
