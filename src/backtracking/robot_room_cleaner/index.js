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
  
  const self = (x = 0, y = 0, d = 0) => {
      robot.clean()
      visited = visit(robot, visited)
      
      for (let i = 0; i < 4; i++) {
          const newD = (i + d) % 4
          const [posX, posY] = positions[newD]
          let newX = posX + x
          let newY = posY + y
          
          if (!visited[newX + ':' + newY] && robot.move()) {
              self(newX, newY, newD)
              goBack(robot)
          }
          
          robot.turnRight()
      }
  }
  
  self(robot.row, robot.col)
};