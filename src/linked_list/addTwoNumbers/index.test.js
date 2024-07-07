import { addTwoNumbers } from '.';

test('Add two numbers', () => {
    const output = addTwoNumbers(
        { val: 2, next: { val: 4, next: { val: 3 } } },
        { val: 5, next: { val: 6, next: { val: 4 } } }
    );
    expect(output).toEqual({ val: 7, next: { val: 0, next: { val: 8 } } });
});
