export function canFinish(numCourses, prerequisites) {
    let graph = {};
    let queue = [];
    let dependencies = new Array(numCourses).fill(0);
    let count = 0;

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    for (let prerequisite of prerequisites) {
        const [x, y] = prerequisite;
        graph[y].push(x);
        dependencies[x] += 1;
    }

    for (let i = 0; i < dependencies.length; i++) {
        if (dependencies[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const vertex = queue.shift();

        for (let v of graph[vertex]) {
            dependencies[v] -= 1;
            if (dependencies[v] === 0) queue.push(v);
        }

        count++;
    }

    return count === numCourses;
}
