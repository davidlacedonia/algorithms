const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');

const readCoordinates = line => {
  const ends = line.split('->')
  const [start, end] = ends.map(end => end.split(','))
  return {
    x1: +start[0],
    y1: +start[1],
    x2: +end[0],
    y2: +end[1],
  }
}

const isHorizontal = coords => coords.y1 === coords.y2

const isVertical = coords => coords.x1 === coords.x2

const isVerticalOrHorizontal = coords => {
  return isHorizontal(coords) || isVertical(coords)
}

const getAllPoints = coords => {
  let points = []

  if (isHorizontal(coords)) {
    let start = Math.min(coords.x1, coords.x2)
    while (start <= Math.max(coords.x1, coords.x2)) {
      points.push({x: start, y: coords.y1})
      start += 1
    }
    return points
  }

  if (isVertical(coords)) {
    let start = Math.min(coords.y1, coords.y2)
    while (start <= Math.max(coords.y1, coords.y2)) {
      points.push({x: coords.x1, y: start})
      start += 1
    }
    return points
  }

  return points
}

/**
 * An entry like 1,1 -> 1,3 covers points 1,1, 1,2, and 1,3.
  ..........
  .111......
  ..........
  ..........
  ..........
  ..........
  ..........
  ..........
  ..........
  ..........
 */
const placeOnMatrix = (matrix, coords) => {
  const points = getAllPoints(coords)

  for (let point of points) {
    const { x, y } = point
    if (!matrix[y]) {
      matrix[y] = []
    }
    matrix[y][x] = (matrix[y][x] || 0) + 1
  }

  return matrix
}

const countOverlappedPointsOnMatrix = matrix => {
  let overlapped = 0
  for (let row of matrix) {
    for (let point of (row || [])) {
      if (point >= 2) {
        overlapped += 1
      }
    }
  }
  return overlapped
}

/**
 * Hydrothermal Venture (avoid line clouds)
 * 
 * Each line is a sequence x1,y1 -> x2,y2
 * (segments includes points at both ends)
 * 
 * for now only consider horizontal and vertical lines (x1 = x2 or y1 = y2)
 * 
 * @returns {number} number of points where at least two lines overlap (> 2 points)
 */
async function main() {
  const sequences = await readFile(file);
  let output = 0, matrix = []

  for (let sequence of sequences) {
    const coords = readCoordinates(sequence)
    
    if (isVerticalOrHorizontal(coords)) {
      matrix = placeOnMatrix(matrix, coords)
    }
  }

  output = countOverlappedPointsOnMatrix(matrix)
  console.log(output);
  return output;
}

main();
