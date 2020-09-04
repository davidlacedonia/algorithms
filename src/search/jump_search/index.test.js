const { ORDERED_ARRAY } = require("../../data");
const jumpSearch = require("./index");

test("jump search", () => {
  const result = jumpSearch(ORDERED_ARRAY, ORDERED_ARRAY[6]);
  expect(result).toStrictEqual(6);
});
