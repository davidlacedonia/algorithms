import PriorityQueue from '../../structures/priority_queue';

/**
 * Dijkstra min path.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {number[][]} times [source, target, distance]
 * @param {number} n number of nodes
 * @param {number} k source node
 */
function dijkstra(times, n, k) {
    let adjacencyList = {};
    let signals = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

    for (let time of times) {
        const [source, target, distance] = time;
        adjacencyList[source] = [
            ...(adjacencyList[source] || []),
            [target, distance],
        ];
    }

    const dijkstra = (source, n) => {
        let pq = new PriorityQueue();
        pq.add([source, 0]);

        signals[source] = 0;

        while (!pq.isEmpty()) {
            let top = pq.pop();
            let [node, distance] = top;

            if (distance > signals[node]) {
                continue;
            }

            for (let edge of adjacencyList[node] || []) {
                let [neighbour, time] = edge;

                if (signals[neighbour] > time + distance) {
                    signals[neighbour] = time + distance;
                    pq.add([neighbour, signals[neighbour]]);
                }
            }
        }
    };

    dijkstra(k, n);

    let output = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {
        output = Math.max(output, signals[i]);
    }

    return output === Number.MAX_SAFE_INTEGER ? -1 : output;
}

export default dijkstra;
