import { UNORDERED_ARRAY, ORDERED_ARRAY } from "../../data";
import { randomNumbers } from "../../utils";
import countingSort from "./index";

test("counting sort", () => {
  const result = countingSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});

test("counting sort random numbers", () => {
  const roundNumber = (number) => Math.floor(number);
  const unsortedNumbers = randomNumbers(10, 500, roundNumber);
  const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
  expect(countingSort(unsortedNumbers)).toStrictEqual(sortedNumbers);
});

test("counting sort with wrong type", () => {
  const result = countingSort("wrong type");
  expect(result).toStrictEqual([]);
});
