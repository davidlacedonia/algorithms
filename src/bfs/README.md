# BFS

Breadth first search

The main algorithm is built around a loop iterating through the queue. At each iteration, we pop out an element from the head of the queue.
Then we do some particular process with the popped element.
More importantly, we then append neighbors of the popped element into the queue, to keep the BFS process running.

## Common application

Find the **shortest** path from the root node to the target node

In most cases, can find the shortest path without traversing all paths.

## Processing order

First-in-First-out (FIFO)

## Template

```js
int BFS(Node root, Node target) {
    Queue<Node> queue;
    int step = 0;
    add root to queue;
    while (queue is not empty) {
        int size = queue.size();
        for (int i = 0; i < size; ++i) {
            Node cur = the first node in queue;
            return step if cur is target;
            for (Node next : the neighbors of cur) {
                add next to queue;
            }
            remove the first node from queue;
        }
        step = step + 1;
    }
    return -1;
}
```