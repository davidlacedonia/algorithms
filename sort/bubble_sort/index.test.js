const { expect } = require("../../expect");
const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const bubbleSort = require("./index");

const result = bubbleSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
