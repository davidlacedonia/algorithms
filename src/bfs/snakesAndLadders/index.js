export function snakesAndLadders(board) {
    const rows = board.length;
    const cols = board[0].length;
    const n = rows * cols;
    const queue = [[1, 0]];
    const cache = new Set();

    const getPosition = (position) => {
        let row = Math.floor((position - 1) / rows);
        let col = (position - 1) % rows;

        col = row % 2 === 1 ? rows - 1 - col : col;
        row = rows - 1 - row;
        return [row, col];
    };

    while (queue.length) {
        const [pos, movs] = queue.shift();

        for (let i = 1; i < 7; i++) {
            let newPos = pos + i;
            const [row, col] = getPosition(newPos);

            if (board[row][col] !== -1) newPos = board[row][col];
            if (newPos === n) return movs + 1;
            if (!cache.has(newPos)) {
                cache.add(newPos);
                queue.push([newPos, movs + 1]);
            }
        }
    }

    return -1;
}
