import SingleLinkedList from './index';

const singleLinkedList = new SingleLinkedList();
beforeAll(() => {
    singleLinkedList.appendToTail(23);
    singleLinkedList.appendToTail(34);
    singleLinkedList.appendToTail(45);
});

test('Append to tail', () => {
    expect(singleLinkedList.get(34).next.data).toEqual(45);
});

test('Delete node', () => {
    singleLinkedList.deleteNode(34);
    expect(singleLinkedList.get(34)).toEqual(null);
});
