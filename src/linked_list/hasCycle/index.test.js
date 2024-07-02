import { hasCycle } from '.';
import SingleLinkedList from '../../structures/single_linked_list';

test('Has cycle', () => {
  let singleLinkedList = new SingleLinkedList();
  singleLinkedList.appendToTail(23);
  singleLinkedList.appendToTail(34);
  singleLinkedList.appendToTail(45);
  const output = hasCycle(singleLinkedList);
  expect(output).toEqual(false);
});
