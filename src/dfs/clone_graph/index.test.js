import cloneGraph from "./index";

// [[2,4],[1,3],[2,4],[1,3]]
test("clone graph", () => {
  const graph = {
    val: 1,
    neighbors: [ { val: 2, neighbors: [] }, { val: 4, neighbors: [] } ]
  }
  const cloned = cloneGraph(graph)
  expect(cloned.val).toEqual(1);
  expect(cloned.neighbors.length).toEqual(2);
  expect(cloned.neighbors[0].val).toEqual(2);
  expect(cloned.neighbors[1].val).toEqual(4);
});