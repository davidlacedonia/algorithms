const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const bubbleSort = require("./index");

test("bubble sort", () => {
  const result = bubbleSort(UNORDERED_ARRAY);
  expect(result).toStrictEqual(ORDERED_ARRAY);
});
