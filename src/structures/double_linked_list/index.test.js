import DoubleLinkedList from './index';

let doubleLinkedList;

beforeEach(() => {
    doubleLinkedList = new DoubleLinkedList();
});

test('add to head', () => {
    doubleLinkedList.addToHead(3);
    expect(doubleLinkedList.head.data).toBe(3);
});
