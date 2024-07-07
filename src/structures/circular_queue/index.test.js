import CircularQueue from './index';

let queue;

beforeEach(() => {
    queue = null;
});

test('Circular queue operations', () => {
    queue = new CircularQueue(3);
    expect(queue.enQueue(1)).toEqual(true);
    expect(queue.enQueue(2)).toEqual(true);
    expect(queue.enQueue(3)).toEqual(true);
    expect(queue.enQueue(4)).toEqual(false);
    expect(queue.Rear()).toEqual(3);
    expect(queue.isFull()).toEqual(true);
    expect(queue.deQueue()).toEqual(true);
    expect(queue.enQueue(4)).toEqual(true);
    expect(queue.Rear()).toEqual(4);
});

// ["MyCircularQueue","enQueue","Rear","Rear","deQueue","enQueue","Rear","deQueue","Front","deQueue","deQueue","deQueue"]
// [[6],[6],[],[],[],[5],[],[],[],[],[],[]]
// Output: [null,true,6,6,true,true,5,true,-1,true,true,true]
// Expected: [null,true,6,6,true,true,5,true,-1,false,false,false]

test('Circular queue second example', () => {
    queue = new CircularQueue(6);
    expect(queue.enQueue(6)).toEqual(true);
    expect(queue.Rear()).toEqual(6);
    expect(queue.Rear()).toEqual(6);
    expect(queue.deQueue()).toEqual(true);
    expect(queue.enQueue(5)).toEqual(true);
    expect(queue.Rear()).toEqual(5);
    expect(queue.deQueue()).toEqual(true);
    expect(queue.Front()).toEqual(-1);
    expect(queue.deQueue()).toEqual(false);
    expect(queue.deQueue()).toEqual(false);
    expect(queue.deQueue()).toEqual(false);
});

// ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","deQueue","deQueue","isEmpty","isEmpty","Rear","Rear","deQueue"]
// [[8],[3],[9],[5],[0],[],[],[],[],[],[],[]]
// O: [null,true,true,true,true,true,true,false,false,-1,-1,true]
// E: [null,true,true,true,true,true,true,false,false,0,0,true]

test('Circular queue third example', () => {
    queue = new CircularQueue(8);
    expect(queue.enQueue(3)).toEqual(true);
    expect(queue.enQueue(9)).toEqual(true);
    expect(queue.enQueue(5)).toEqual(true);
    expect(queue.enQueue(0)).toEqual(true);
    expect(queue.deQueue()).toEqual(true);
    expect(queue.deQueue()).toEqual(true);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.Rear()).toEqual(0);
    expect(queue.Rear()).toEqual(0);
    expect(queue.deQueue()).toEqual(true);
});
