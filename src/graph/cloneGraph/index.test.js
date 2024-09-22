import { cloneGraph } from '.';

test('Clone graph', () => {
    let one = { val: 1, neighbors: [] };
    let two = { val: 2, neighbors: [] };
    let three = { val: 3, neighbors: [] };
    let four = { val: 4, neighbors: [] };
    one.neighbors.push(two);
    one.neighbors.push(three);
    two.neighbors.push(one);
    two.neighbors.push(three);
    three.neighbors.push(two);
    three.neighbors.push(four);
    four.neighbors.push(one);
    four.neighbors.push(three);
    const output = cloneGraph(one);
    expect(output.neighbors[0].neighbors[0].val).toEqual(1);
    expect(output.neighbors[0].neighbors[1].val).toEqual(3);
    expect(output.neighbors[1].neighbors[1].val).toEqual(4);
    expect(output.neighbors[0].neighbors[1].neighbors[1].val).toEqual(4);
});
