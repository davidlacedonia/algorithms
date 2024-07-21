import { isHappy } from '.';

test('Is happy', () => {
    const output = isHappy(19);
    expect(output).toEqual(true);
});

test('Is happy', () => {
    const output = isHappy(2);
    expect(output).toEqual(false);
});
