const { ORDERED_ARRAY } = require("../../data");
const binarySearch = require("./index");

test("binary search", () => {
  const index = binarySearch(ORDERED_ARRAY, 7);
  expect(index).toStrictEqual(6);
});
