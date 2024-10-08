import { climbStairsTopDown, climbStairsBottomUp } from '.';

test('climbing stairs top down', () => {
    expect(climbStairsTopDown(41)).toEqual(267914296);
});

test('climbing stairs bottom u[', () => {
    expect(climbStairsBottomUp(41)).toEqual(267914296);
});
