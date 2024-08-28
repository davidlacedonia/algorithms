import { mySqrt } from '.';

test('My square root', () => {
    expect(mySqrt(2)).toEqual(1);
    expect(mySqrt(8)).toEqual(2);
    expect(mySqrt(25)).toEqual(5);
});
