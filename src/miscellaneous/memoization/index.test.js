const linearSearch = require("../../search/linear_search");
const memo = require("./index");
const { ORDERED_ARRAY } = require("../../data");

let memoizedLinearSearch;

beforeAll(() => {
  memoizedLinearSearch = memo(linearSearch);
});

test("memoization red (first time)", () => {
  const result = memoizedLinearSearch(ORDERED_ARRAY, 8);
  expect(result).toStrictEqual(7);
});

test("memoization blue", () => {
  const result = memoizedLinearSearch(ORDERED_ARRAY, 9);
  expect(result).toStrictEqual(8);
});

test("memoization red second time (faster)", () => {
  const result = memoizedLinearSearch(ORDERED_ARRAY, 8);
  expect(result).toStrictEqual(7);
});
