/**
 * Priority queue.
 *
 * Pops always the min element.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 */
function PriorityQueue(initial = []) {
    let items = [];

    return {
        add: (element) => {
            const [, value] = element;

            let index = undefined;
            for (let i = 0; i < items.length; i++) {
                if (items[i][1] > value) {
                    index = i;
                    break;
                }
            }

            if (index >= 0) {
                items.splice(index, 0, element);
            } else {
                items.push(element);
            }
        },
        pop: () => {
            return items.shift();
        },
        isEmpty: () => {
            return !items.length;
        },
    };
}

export default PriorityQueue;
