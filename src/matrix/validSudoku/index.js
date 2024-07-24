let coords = [0, 0, 0, 3, 3, 3, 6, 6, 6];

export function isValidSudoku(board) {
    let rows = [];
    let cols = [];
    let boxes = {};

    for (let row = 0; row < board.length; row++) {
        if (!rows[row]) rows[row] = {};
        for (let col = 0; col < board[row].length; col++) {
            if (!cols[col]) cols[col] = {};

            const value = board[row][col];
            if (value === '.') continue;

            // row
            if (rows[row][value]) return false;
            rows[row][value] = true;

            // col
            if (cols[col][value]) return false;
            cols[col][value] = true;

            // box
            const coord = String(coords[row]) + String(coords[col]);
            if (!boxes[coord]) boxes[coord] = {};
            if (boxes[coord][value]) return false;
            boxes[coord][value] = true;
        }
    }

    return true;
}
