export function simplifyPath(path) {
    const stack = [];

    for (let d of path.split('/')) {
        if (d === '..') {
            stack.pop();
            continue;
        }

        if (d === '.') continue;

        if (d.length) stack.push(d);
    }

    return '/' + stack.join('/');
}
