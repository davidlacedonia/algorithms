const { UNORDERED_ARRAY, ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");
const bucketSort = require("./index");

const result = bucketSort(UNORDERED_ARRAY);
expect(result).toBe(ORDERED_ARRAY);
