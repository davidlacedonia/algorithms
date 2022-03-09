import validGraphTree from './index'

test('Valid graph tree', () => {
  const nodes = 5
  const edges = [[0,1],[0,2],[0,3],[1,4]]
  expect(validGraphTree(nodes, edges)).toEqual(true)
})

test('Valid graph tree', () => {
  const nodes = 5
  const edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
  expect(validGraphTree(nodes, edges)).toEqual(false)
})
