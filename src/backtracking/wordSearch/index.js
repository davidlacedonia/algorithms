const DIRECTIONS = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
];

export function exist(board, word) {
    let output = false;

    const sail = (i, j, n, visited = {}) => {
        if (word[n] !== board[i][j]) return;
        if (n === word.length - 1 || output) {
            output = true;
            return;
        }

        visited[`${i},${j}`] = true;

        for (let [_x, _y] of DIRECTIONS) {
            const x = _x + i;
            const y = _y + j;

            if (!board[x] || !board[x][y] || visited[`${x},${y}`]) continue;
            sail(x, y, n + 1, visited);
        }

        visited[`${i},${j}`] = false;

        return false;
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== word[0]) continue;
            sail(i, j, 0);
            if (output) return true;
        }
    }

    return output;
}
