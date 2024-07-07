import Node from '../node';

/**
 * Single linked list.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @returns {object} get, appendToTail and deleteNode methods.
 */
function SingleLinkedList() {
    let head = null;

    return {
        get(value) {
            let current = head;
            if (current.data === value) return current;

            while (current.next) {
                if (current.data === value) {
                    return current;
                }
                current = current.next;
            }

            return null;
        },
        appendToTail(value) {
            const node = new Node(value);

            if (!head) {
                head = node;
                return value;
            }

            let current = head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
            return value;
        },
        deleteNode(value) {
            let current = head;

            while (current.next) {
                if (current.next && current.next.data === value) {
                    current.next = current.next.next;
                    return null;
                }
                current = current.next;
            }

            return null;
        },
    };
}

export default SingleLinkedList;
