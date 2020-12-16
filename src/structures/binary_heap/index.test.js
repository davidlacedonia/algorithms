import BinaryHeap from "./index";

let binaryHeap;

beforeAll(() => {
  binaryHeap = new BinaryHeap();
  binaryHeap.push(3);
  binaryHeap.push(15);
  binaryHeap.push(21);
  binaryHeap.push(30);
  binaryHeap.push(31);
  binaryHeap.push(32);
  binaryHeap.push(40);
  binaryHeap.push(51);
  binaryHeap.push(50);
  binaryHeap.push(40);
});

test("Creates binary heap", () => {
  expect(binaryHeap.items[1]).toEqual(3);
});

test("Inserts new value", () => {
  binaryHeap.push(8);
  expect(binaryHeap.items[2]).toEqual(8);
});

test("Pop from binary heap", () => {
  binaryHeap.pop();
  console.log(binaryHeap.items);
  expect(binaryHeap.items[5]).toEqual(31);
});
