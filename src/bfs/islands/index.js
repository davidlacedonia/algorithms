const LAND = '1'
const VISITED = '-1'
const DIRECTIONS = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
]

/**
 * BFS Islands.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 *
 * @param {array} grid m x n 2D binary grid
 *
 * @returns {number} number of islands
 */
function numIslands(grid) {
  let islands = 0

  const visitIsland = (i, j) => {
    grid[i][j] = VISITED
    for (let direction of DIRECTIONS) {
      const [_x, _y] = direction
      const x = i + _x
      const y = j + _y
      if (grid[x] && grid[x][y] === LAND) {
        visitIsland(x, y)
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const curr = grid[i][j]
      if (curr === LAND) {
        visitIsland(i, j)
        islands += 1
      }
    }
  }

  return islands
}

export default numIslands;
