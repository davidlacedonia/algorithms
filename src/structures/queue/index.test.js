import Queue from './index';

describe('Queue', () => {
    let queue;

    beforeAll(() => {
        queue = new Queue();
    });

    it('Creates a queue', () => {
        expect(queue).not.toBe(0);
    });

    it('add to queue', () => {
        queue.add(1);
        queue.add(2);
        queue.add(3);
        expect(queue.peek()).toBe(1);
    });

    it('remove from queue', () => {
        let removed = queue.remove();
        expect(removed).toBe(1);
    });

    it('peek from queue', () => {
        let peeked = queue.peek();
        expect(peeked).toBe(2);
    });

    it('isEmpty queue', () => {
        queue.remove();
        queue.remove();
        expect(queue.isEmpty()).toBe(true);
    });
});
