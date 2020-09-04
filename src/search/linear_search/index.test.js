const { ORDERED_ARRAY } = require("../../data");
const linearSearch = require("./index");

test("linear search", () => {
  const result = linearSearch(ORDERED_ARRAY, ORDERED_ARRAY[5]);
  expect(result).toStrictEqual(5);
});
