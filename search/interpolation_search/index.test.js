const { ORDERED_ARRAY } = require("../../data");
const { expect } = require("../../expect");
const interpolationSearch = require('./index');

const result = interpolationSearch(ORDERED_ARRAY, ORDERED_ARRAY[3]);
expect(result).toBe(3);
