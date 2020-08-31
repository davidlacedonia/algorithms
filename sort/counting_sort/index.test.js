const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");
const countingSort = require("./index");

const result = countingSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
