export function setZeroes(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0) continue;

            for (let k = j - 1; k >= 0; k--) {
                if (matrix[i][k] === 0) continue;
                matrix[i][k] = null;
            }
            for (let k = j + 1; k < matrix[i].length; k++) {
                if (matrix[i][k] === 0) continue;
                matrix[i][k] = null;
            }

            for (let k = i - 1; k >= 0; k--) {
                if (matrix[k][j] === 0) continue;
                matrix[k][j] = null;
            }
            for (let k = i + 1; k < matrix.length; k++) {
                if (matrix[k][j] === 0) continue;
                matrix[k][j] = null;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === null) matrix[i][j] = 0;
        }
    }

    return matrix;
}
