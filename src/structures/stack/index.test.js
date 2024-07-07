import Stack from './index';

describe('Stack', () => {
    let stack;

    beforeAll(() => {
        stack = new Stack();
    });

    it('Creates a stack', () => {
        expect(stack).not.toBe(0);
    });

    it('push to stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
    });

    it('pop from stack', () => {
        let popped = stack.pop();
        expect(popped).toBe(3);
    });

    it('peek from stack', () => {
        let peeked = stack.peek();
        expect(peeked).toBe(2);
    });

    it('isEmpty stack', () => {
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });
});
