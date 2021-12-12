const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');
const Node = require('../structures/node.js')

const isLowerCase = value =>  value.charCodeAt() > 96 && value.charCodeAt() < 123

const hasBeenVisited = node => {
  if (isLowerCase(node.value)) {
    node.tickets -= 1
    return node.tickets <= 0
  } else {
    return false
  }
}

const getRevisitables = ports => Object.keys(ports).filter(c => c !== 'start' && c !== 'end' && isLowerCase(c))

const createGraphFromConnections = connections => {
  let ports = {}, start = []

  for (let connection of connections) {
    const [source, target] = connection.split('-')

    const sourcePort = ports[source] || new Node(source)
    const targetPort = ports[target] || new Node(target)

    ports[source] = sourcePort
    ports[target] = targetPort

    sourcePort.children[targetPort.value] = targetPort
    targetPort.children[sourcePort.value] = sourcePort

    if (sourcePort.value === 'start') {
      start.push(targetPort)
    }
  }

  return [start, ports]
}

const findDistinctPaths = (graph, ports) => {
  let paths = []
  const revisitables = getRevisitables(ports)

  const createPath = (node, revisitable, path = '', visited = {}) => {
    const children = Object.keys(node.children || {})

    if (visited[node.value] && node.value !== 'end') return
    if (node.value === 'start') return
    if (node.value === 'end') {
      paths.push(path)
      return
    }

    if (isLowerCase(node.value) && node.value !== revisitable) {
      visited[node.value] = hasBeenVisited(node)
    }

    if (node.value === revisitable) {
      revisitable = null
    }
    
    for (let child of children) {
      createPath(node.children[child], revisitable, path + node.value, { ...visited })
    }
  }

  for(let revisitable of revisitables) {
    for (let startingPoint of graph) {
      createPath(startingPoint, revisitable)
    }
  }
  
  return paths
}

/**
  * input: list of how all of the caves are connected
  * 
  * origin: start
  * destination: end
  * b-d: means b is connected to cave d (you can move between them)

  * big caves: written in uppercase, like A
  * small caves: written in lowercase, like b
  *
  * big caves can be visited any number of times,
  * a single small cave can be visited at most twice,
  * and the remaining small caves can be visited at most once
  * 
  * @return {number} distinct paths
 */
async function main() {
  const connections = await readFile(file);
  let output = 0, paths

  const [graph, ports] = createGraphFromConnections(connections)
  paths = findDistinctPaths(graph, ports)
  output = [...new Set(paths)].length

  console.log(output);
  return output;
}

main();
