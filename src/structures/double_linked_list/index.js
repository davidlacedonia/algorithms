import Node from '../node';

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;

  this.addToHead = function (value) {
    const node = new Node(value);
    node.next = this.head;

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;
  };
}

export default DoubleLinkedList;
