const readFile = require('../readFile.js');
const file = require.resolve('./input.txt');
const Node = require('../structures/node.js')

const hasBeenVisited = node => {
  const charCode = node.value.charCodeAt()
  return charCode > 96 && charCode < 123 ? true : false
}

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

  return start
}

const findDistinctPaths = graph => {
  let paths = []

  const createPath = (node, path = '', visited = {}) => {
    const children = Object.keys(node.children || {})
    const _visited = { ...visited }

    if (_visited[node.value] && node.value !== 'end') return
    _visited[node.value] = hasBeenVisited(node)

    if (node.value === 'start') return

    if (node.value === 'end') {
      paths.push(path)
      return
    }

    for (let child of children) {
      createPath(node.children[child], path + node.value, _visited)
    }
  }

  for (let startingPoint of graph) {
    createPath(startingPoint)
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
  * @return {number} distinct paths that visit small caves at most once
 */
async function main() {
  const connections = await readFile(file);
  let output = 0, graph, paths

  graph = createGraphFromConnections(connections)
  paths = findDistinctPaths(graph)
  output = paths.length
  
  console.log(output);
  return output;
}

main();
