const isNotUnderAttack = (board, row, col) => {
	// horizontal
	for (let i = 0; i < board.length; i++) {
		if (board[row] && board[row][i]) {
			return false
		}
	}

	// vertical
	for (let i = 0; i < board.length; i++) {
		if (board[i] && board[i][col]) {
			return false
		}
	}

	// hill diagonal
	let r = row, c = col
	while (r > 0 && c > 0) {
		r--
		c--
		if (board[r] && board[r][c]) {
			return false
		}
	}
	r = row, c = col
	while (r < board.length && c < board.length) {
		r++
		c++
		if (board[r] && board[r][c]) {
			return false
		}
	}

	// dale diagonal
	r = row, c = col
	while (r > 0  && c < board.length) {
		r--
		c++
		if (board[r] && board[r][c]) {
			return false
		}
	}
	r = row, c = col
	while (r < board.length && c > 0) {
		r++
		c--
		if (board[r] && board[r][c]) {
			return false
		}
	}

	return true
}

const placeQueen = (board, row, col) => {
	if (board[row]) {
		board[row][col] = true
	} else {
		board[row] = []
		board[row][col] = true
	}
}

const removeQueen = (board, row, col) => {
	if (board[row]) {
		board[row][col] = false
	} else {	
		board[row] = []
		board[row][col] = false
	}
}

/**
* Backtracking (N queens)
* 
* The n-queens puzzle is the problem of placing n queens on an n x n chessboard,
* such that no two queens attack each other.
*
* @param {number} n number of queens
*
* @returns {number} the number of distinct solutions to the n-queens puzzle
*/
function totalNQueens(n) {
	let count = 0, board = [[]]

	const backtrackNQueen = (row = 0) => {
		for (let col = 0; col < n; col++) {
			if (isNotUnderAttack(board, row, col)) {
				placeQueen(board, row, col)
				if (row === n - 1) {
					count += 1
				} else {
					backtrackNQueen(row + 1)
				}
				removeQueen(board, row, col)
			}
		}
	}

	backtrackNQueen()
	return count
}

export default totalNQueens