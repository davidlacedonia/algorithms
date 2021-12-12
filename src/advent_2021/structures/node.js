function Node(value, children = {}) {
  return {
    value,
    children,
    tickets: 1,
  }
}

module.exports = Node