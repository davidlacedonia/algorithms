# DFS

Depth first search

## Common application

Find the path from the root node to the target node

## Processing order

Last-in-First-out (LIFO)

## Template

```js
boolean DFS(Node cur, Node target, Set<Node> visited) {
    return true if cur is target;
    for (next : each neighbor of cur) {
        if (next is not in visited) {
            add next to visted;
            return true if DFS(next, target, visited) == true;
        }
    }
    return false;
}
```