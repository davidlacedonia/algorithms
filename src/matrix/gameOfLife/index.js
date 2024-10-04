const DIRECTIONS = [
    [-1, +0], // up
    [+1, +0], // down
    [+0, -1], // left
    [+0, +1], // right
    [-1, -1], // top-left
    [-1, +1], // top-right
    [+1, -1], // bottom-left
    [+1, +1], // bottom-right
];

export function gameOfLife(board) {
    const getLife = (x, y) => {
        let neighbours = 0;

        for (let dir of DIRECTIONS) {
            const [_x, _y] = dir;
            if (board[x + _x] && board[x + _x][y + _y] !== undefined) {
                if (Math.abs(board[x + _x][y + _y]) === 1) {
                    neighbours++;
                }
            }
        }

        return neighbours;
    };

    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            let neighbours = getLife(x, y);
            if (board[x][y] === 0) {
                if (neighbours === 3) board[x][y] = 2;
            } else if (board[x][y] === 1) {
                if (neighbours < 2 || neighbours > 3) {
                    board[x][y] = -1;
                }
            }
        }
    }

    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] === -1) board[x][y] = 0;
            if (board[x][y] === 2) board[x][y] = 1;
        }
    }

    return board;
}
