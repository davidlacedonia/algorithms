export function calcEquation(equations, values, queries) {
    const output = [];
    const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const equation = equations[i];
        const [numerator, denominator] = equation;
        if (!graph[numerator]) graph[numerator] = {};
        if (!graph[denominator]) graph[denominator] = {};
        graph[numerator][denominator] = values[i];
        graph[denominator][numerator] = 1 / values[i];
    }

    function evaluateQuery(query, visited = {}) {
        const [enumerator, denominator] = query;

        if (!graph[enumerator] || !graph[denominator]) return -1;
        if (enumerator === denominator) return 1;

        visited[enumerator] = true;

        const neighbours = graph[enumerator];
        for (let neighbour in neighbours) {
            if (!visited[neighbour]) {
                const result = evaluateQuery([neighbour, denominator], visited);
                if (result !== -1) {
                    return neighbours[neighbour] * result;
                }
            }
        }

        return -1;
    }

    for (let query of queries) {
        const result = evaluateQuery(query);
        output.push(result);
    }

    return output;
}
