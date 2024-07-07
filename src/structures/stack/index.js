import Node from '../node';

/**
 * Stack.
 *
 * Last-in first-out ordering.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 */
function Stack() {
    let top = null;

    return {
        push: (value) => {
            const node = new Node(value);
            node.next = top;
            top = node;
        },
        pop: () => {
            if (!top) return null;
            let data = top.data;
            top = top.next;
            return data;
        },
        peek: () => {
            if (!top) return null;
            return top.data;
        },
        isEmpty: () => {
            return !top;
        },
    };
}

export default Stack;
