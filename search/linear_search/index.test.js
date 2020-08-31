const { ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");
const linearSearch = require("./index");

const result = linearSearch(ORDERED_ARRAY, ORDERED_ARRAY[5]);
expect(result).toBe(5);
