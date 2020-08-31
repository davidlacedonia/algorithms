const { expect } = require("../../expect");
const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const selectionSort = require("./index");

const result = selectionSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
