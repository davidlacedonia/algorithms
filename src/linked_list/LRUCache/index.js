var LRUCache = function (capacity) {
    this.cache = {};
    this.head = {};
    this.tail = {};

    this.head.next = this.tail;
    this.head.prev = null;
    this.tail.prev = this.head;
    this.tail.next = null;

    this.capacity = capacity;
    this.length = 0;
    return this;
};

LRUCache.prototype.addNode = function (node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
};

LRUCache.prototype.removeNode = function (node) {
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
};

LRUCache.prototype.moveToHead = function (node) {
    this.removeNode(node);
    this.addNode(node);
};

LRUCache.prototype.popTail = function () {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
};

LRUCache.prototype.get = function (key) {
    const node = this.cache[key];
    if (!node) return -1;
    this.moveToHead(node);
    return node.value;
};

LRUCache.prototype.put = function (key, value) {
    const node = this.cache[key];

    if (!node) {
        const newNode = {
            key,
            value,
        };
        this.cache[key] = newNode;
        this.addNode(newNode);
        this.length += 1;

        if (this.length > this.capacity) {
            const toRemove = this.popTail();
            delete this.cache[toRemove.key];
            this.lenght -= 1;
        }
    } else {
        node.value = value;
        this.moveToHead(node);
    }
};

export { LRUCache };
