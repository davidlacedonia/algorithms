import PriorityQueue from './index';

describe('PriorityQueue', () => {
    let priorityQueue;

    beforeAll(() => {
        priorityQueue = new PriorityQueue();
    });

    it('add to priority queue', () => {
        priorityQueue.add([1, 20]);
        priorityQueue.add([2, 30]);
        priorityQueue.add([3, 10]);
        expect(priorityQueue.pop()[1]).toBe(10);
    });
});
