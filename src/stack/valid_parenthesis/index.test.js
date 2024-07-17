import { isValid } from '.';

test('Is valid parenthesis', () => {
    const output = isValid('()');
    expect(output).toEqual(true);
});

test('Is valid parenthesis', () => {
    const output = isValid('(())[]');
    expect(output).toEqual(true);
});

test('Is valid parenthesis', () => {
    const output = isValid('([)');
    expect(output).toEqual(false);
});
