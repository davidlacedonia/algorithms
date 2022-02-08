# BFS

Breadth first search

## Common application

Find the **shortest** path from the root node to the target node

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