export function spiralOrder(matrix) {
    let left = 0,
        right = matrix[0].length - 1;
    let top = 0,
        bottom = matrix.length - 1;
    let output = [];

    while (left <= right && top <= bottom) {
        // right
        for (let i = left; i <= right; i++) {
            output.push(matrix[top][i]);
        }
        top++;

        // down
        for (let i = top; i <= bottom; i++) {
            output.push(matrix[i][right]);
        }
        right--;

        // left
        for (let i = right; i >= left && top <= bottom; i--) {
            output.push(matrix[bottom][i]);
        }
        bottom--;

        // up
        for (let i = bottom; i >= top && left <= right; i--) {
            output.push(matrix[i][left]);
        }
        left++;
    }

    return output;
}
