const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

const Coord = coord => {
  const [x, y] = coord.split(',')
  return [+x, +y]
}

const Fold = fold => {
  const folding = fold.split(' ')
  const [coord, line] = folding.pop().split('=')
  return [coord, +line]
}

const createMatrix = coords => {
  let matrix = []

  for (let coord of coords) {
    const [x, y] = coord

    if (!matrix[y]) {
      matrix[y] = []
    }

    matrix[y][x] = '#'
    
  }

  return matrix
}

const overlap = (target, source) => {
  if (source === '#') {
    return '#'
  } else {
    return target
  }
}

const foldMatrix = (matrix, fold) => {
  const [type, line] = fold
  let _matrix = []

  switch (type) {
    case 'y':
      for (let i = 1; i + line < matrix.length; i++) {
        const sourceIndex = line + i
        const targetIndex = line - i

        matrix[sourceIndex] = matrix[sourceIndex] || []
        matrix[targetIndex] = matrix[targetIndex] || []

        for (let j = 0; j < matrix[sourceIndex].length; j++) {
          matrix[targetIndex][j] = overlap(matrix[targetIndex][j], matrix[sourceIndex][j])
        }
      }

      matrix.length = line

      break;
    case 'x':
      for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i] || []

        for (let j = 0; j + line < matrix[i].length; j++) {
          const sourceIndex = line + j
          const targetIndex = line - j

          matrix[i][targetIndex] = overlap(matrix[i][targetIndex], matrix[i][sourceIndex])
        }

        matrix[i].length = line
      }

      break;
      
  }

  return matrix
}

const printMatrix = matrix => {
  let result = ''

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j % 5 === 0) result += '   '
      result += matrix[i][j] || ' '
    }
    result += '\n'
  }

  return result
}

/** 
 * first part: coordinates of dots (x, y)
 * X moves to the RIGHT
 * Y moves DOWN
 * 
 * second part: fold instructions
 * each instruction indicates a line
 * Y folds the paper UP
 * X folds the paper LEFT
 * 
 * because paper is transparent
 * overlapping dots merge together
 * and dots below are visible
 * 
 * @returns {number} how many dots are visible after folding
 */
async function main() {
  const [firstInput, secondInput] = await readFile(file, '\n\n');
  const coords = firstInput.split('\n').map(Coord)
  const folds = secondInput.split('\n').map(Fold)
  let output = 0, matrix = []

  matrix = createMatrix(coords)

  for (let fold of folds) {
    matrix = foldMatrix(matrix, fold)
  }

  output = printMatrix(matrix)
  console.log(output);
  return output;
}

main();
