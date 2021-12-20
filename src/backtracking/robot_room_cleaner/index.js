const goBack = robot => {
  robot.turnLeft()
  robot.turnLeft()
  robot.move()
  robot.turnLeft()
  robot.turnLeft()
}

const visit = (robot, visited) => {
  const { row, col } = robot
  visited[row + ':' + col] = true
  return visited
}

/**
* @param {Robot} robot
* @return {void}
*/
var cleanRoom = function(robot) {
  const positions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  let visited = {}
  
  const backtrack = (x = 0, y = 0, d = 0) => {
      robot.clean()
      visited = visit(robot, visited)
      
      for (let i = 0; i < 4; i++) {
          const _d = (i + d) % 4
          const [row, col] = positions[_d]
          let _x = row + x
          let _y = col + y
          
          if (!visited[_x + ':' + _y] && robot.move()) {
              backtrack(_x, _y, _d)
              goBack(robot)
          }
          
          robot.turnRight()
      }
  }
  
  backtrack(robot.row, robot.col)
};