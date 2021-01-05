import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import { randomElements } from "../../utils";
import bubbleSort from "./index";

test("bubble sort", () => {
  const result = bubbleSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});

test("bubble sort random elements", () => {
  const unsortedElements = randomElements(10, 500);
  const sortedElements = unsortedElements.sort((a, b) => a - b);
  expect(bubbleSort(unsortedElements)).toStrictEqual(sortedElements);
});
