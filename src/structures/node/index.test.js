import Node from "./index";

describe("Node", () => {
  let node = null;

  it("Creates node", () => {
    node = new Node(23);
    expect(node.data).toEqual(23);
  });

  it("Links node to another node", () => {
    node.next = new Node(24);
    expect(node.next.data).toEqual(24);
  });
});
