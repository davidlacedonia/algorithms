export function rotateImage(matrix) {
    const n = matrix.length,
        depth = ~~(n / 2);

    for (let i = 0; i < depth; i++) {
        const len = n - i * 2 - 1;
        const opp = n - i - 1;
        for (let j = 0; j < len; j++) {
            const aux = matrix[i][i + j];
            matrix[i][i + j] = matrix[opp - j][i];
            matrix[opp - j][i] = matrix[opp][opp - j];
            matrix[opp][opp - j] = matrix[i + j][opp];
            matrix[i + j][opp] = aux;
        }
    }

    return matrix;
}
