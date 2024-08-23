export function searchMatrix(matrix, target) {
    let left = 0,
        right = matrix.length - 1;

    let row = null;
    while (left <= right && !row) {
        const mid = Math.floor((right + left) / 2);
        if (matrix[mid][0] < target) {
            if (
                (matrix[mid + 1] && matrix[mid + 1][0] > target) ||
                !matrix[mid + 1]
            ) {
                row = mid;
                break;
            }
            left = mid + 1;
        } else if (matrix[mid][0] > target) {
            right = mid - 1;
        } else {
            return target;
        }
    }

    left = 0;
    right = matrix[row]?.length;
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        const value = matrix[row][mid];
        if (value === undefined) return false;
        if (value === target) return target;
        if (value < target) left = mid + 1;
        if (value > target) right = mid - 1;
    }

    return false;
}
