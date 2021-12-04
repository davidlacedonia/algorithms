const readFile = require('../readFile.js');
const boardsFile = require.resolve('./boards.txt');
const numbersFile = require.resolve('./numbers.txt');

/**
 * Sum of all unmarked numbers
 * Then, multiply that sum by the number that was just called when the board won
 */
 const getScore = (board, last) => {
  let unmarkedNumbers = 0

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j].checked) {
        unmarkedNumbers += +board[i][j].value
      }
    }
  }

  return unmarkedNumbers * last
}

/**
 * @returns [row, col]
 */
const getNumberPosition = (board, number) => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i]

    for (let j = 0; j < row.length; j++) {
      
      if (board[i][j].value === number) {
        return [i, j]
      }
    }
  }

  return []
}

const checkWinnerNumber = (board, r, c) => {
  // check row
  const row = board[r]
  
  let rowWinner = true
  for (let i = 0; i < row.length && rowWinner; i++) {
    if (!row[i].checked) {
      rowWinner = false
    }
  }

  if (rowWinner) {
    return true
  }

  // check col
  let colWinner = true
  for (let i = 0; i < board.length && colWinner; i++) {
    if (!board[i][c].checked) {
      colWinner = false
    }
  }

  if (colWinner) {
    return true
  }
}

/**
 * @returns [board winner index, number]
 */
const checkNumber = (boards, number) => {
  let firstNumber
  let winners = []

  for (let i = 0; i < boards.length; i++) {
    const board = boards[i]

    const [row, col] = getNumberPosition(board, number)
    if (row >= 0 && col >= 0) {
      board[row][col].checked = true

      const hasWon = checkWinnerNumber(board, row, col)
      if (hasWon) {
        winners.push(i)
        firstNumber = number
      }
    }
  }

  return [winners, firstNumber]
}

const readBoards = boardsText => {
  return boardsText.map(b => b.split('\n').map(bb => bb.split(' ').filter(v => v !== '').map(v => ({ value: v, checked: false }))))
}

/**
 * Numbers may not appear on all boards
 * If all numbers in any row or any column of a board are marked, that board wins
 * 
 * Figure out which board will win first
 */
async function main() {
  let boards = readBoards(await readFile(boardsFile, '\n\n'))
  const sequence = await readFile(numbersFile, ',');
  let output = 0, last, lastBoard


  for (let i = 0; i < sequence.length && boards.length > 0; i++) {
    const number = sequence[i]
    const [winners, newLast] = checkNumber(boards, number)

    if (winners.length > 0) {
      lastBoard = boards[winners[winners.length - 1]]
      boards = boards.filter((b, index) => !winners.includes(index))
      last = newLast
    }
  }

  output = getScore(lastBoard, last)

  return output;
}

main();
