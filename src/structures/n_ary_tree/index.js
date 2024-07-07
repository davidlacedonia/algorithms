function Node(val, children = []) {
    this.val = val;
    this.children = children;
}

export default class Codec {
    constructor() {}

    /**
     * Encodes a tree to a single string.
     *
     * @param {Node|null} root
     * @return {string}
     */
    serialize = function (root) {
        let acc = [];
        let flatten = [];

        const _internal = (root, level = 0, last = true) => {
            if (!root) return;
            acc[level] = acc[level] ? [...acc[level], root.val] : [root.val];

            if (last) acc[level] = [...acc[level], 'null'];

            if (!root.children.length) {
                acc[level + 1] = acc[level + 1]
                    ? [...acc[level + 1], 'null']
                    : ['null'];
            }

            for (let i = 0; i < root.children.length; i++) {
                _internal(
                    root.children[i],
                    level + 1,
                    i === root.children.length - 1
                );
            }
        };

        _internal(root);
        for (let arr of acc) {
            flatten.push(...arr);
        }

        let nullable = !flatten[flatten.length - 1];
        for (let i = flatten.length - 1; i >= 0 && nullable; i--) {
            if (flatten[i] !== 'null') {
                nullable = false;
                flatten.length = i + 1;
            }
        }

        const _stringifiedFlatten = '[' + flatten.join(',') + ']';
        return _stringifiedFlatten;
    };

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {Node|null}
     */
    deserialize = function (data) {
        const values = data.slice(1, data.length - 1).split(',');
        let head = new Node(values[0], []);

        const _process = (children, initial) => {
            if (!children?.length || initial > values.length) return;

            let j = initial;
            let _children = [];

            for (let i = 0; i < children.length; i++) {
                const curr = children[i];

                if (values[j] === 'null' || !values[j]) {
                    j++;
                } else {
                    while (values[j] !== 'null' && values[j]) {
                        const node = new Node(values[j], []);
                        curr.children.push(node);
                        _children.push(node);
                        j++;
                    }
                    j++;
                }
            }

            _process(_children, j);
        };

        _process([head], 2);
        return head;
    };
}
