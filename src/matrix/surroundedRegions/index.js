const DIRS = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
];

export function solve(board) {
    let visited = {};
    let conquered = {};
    let valid = true;

    function conquer(board, i, j) {
        conquered[`${i}-${j}`] = true;
        board[i][j] = 'X';
        for (let d of DIRS) {
            const x = i + d[0];
            const y = j + d[1];

            if (board[x] && board[x][y] === 'O') {
                if (!conquered[`${x}-${y}`]) {
                    conquer(board, x, y);
                }
            }
        }
    }

    function sail(board, i, j) {
        visited[`${i}-${j}`] = true;

        for (let dd of DIRS) {
            let _x = i + dd[0];
            let _y = j + dd[1];
            if (!board[_x] || !board[_x][_y]) valid = false;
        }

        for (let d of DIRS) {
            const x = i + d[0];
            const y = j + d[1];

            if (board[x] && board[x][y] === 'O' && !visited[`${x}-${y}`]) {
                sail(board, x, y);
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O' && !visited[`${i}-${j}`]) {
                sail(board, i, j);
                if (valid) conquer(board, i, j);
                valid = true;
            }
        }
    }
    return board;
}
