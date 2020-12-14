import { TestScheduler } from "jest";
import BinaryHeep from "./index";

let binaryHeep;

beforeAll(() => {
  binaryHeep = new BinaryHeep();
  binaryHeep.insert(4);
  binaryHeep.insert(50);
  binaryHeep.insert(7);
  binaryHeep.insert(55);
  binaryHeep.insert(90);
  binaryHeep.insert(87);
});

test("Creates binary heep", () => {
  expect(binaryHeep.root).toEqual(4);
});

test("Inserts new value", () => {
  binaryHeep.insert(2);
  expect(binaryHeep.root).toEqual(2);
});
