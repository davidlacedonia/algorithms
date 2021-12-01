import totalNQueens from "./index";

test('Backtracking total N queens', () => {
  expect(totalNQueens(1)).toEqual(1)
})

test('Backtracking total N queens', () => {
  expect(totalNQueens(2)).toEqual(0)
})

test('Backtracking total N queens', () => {
  expect(totalNQueens(3)).toEqual(0)
})

test('Backtracking total N queens', () => {
  expect(totalNQueens(4)).toEqual(2)
})
