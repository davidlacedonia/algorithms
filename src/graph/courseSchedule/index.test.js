import { canFinish } from '.';

test('Course schedule', () => {
    expect(
        canFinish(2, [
            [1, 0],
            [0, 1],
        ])
    ).toEqual(false);
    expect(
        canFinish(5, [
            [1, 4],
            [2, 4],
            [3, 1],
            [3, 2],
        ])
    ).toEqual(true);
});
