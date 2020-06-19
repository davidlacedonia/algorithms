const { expect } = require("../expect");

/**
 * Each time a recursive function calls itself, it reduces the given problem into subproblems,
 * until it reaches a point where the subproblem can be solved without further recursion.
 */

const input = ["h", "e", "l", "l", "o"];
const target = ["o", "l", "l", "e", "h"];

/**
 * Reverse string recursively O(1) space complexity.
 *
 * Calls itself, swaping elements at index i, until half of the string.
 */
const reverseString = (string, i) => {
  if (i >= Math.floor(string.length / 2)) {
    return string;
  }

  // swap elements
  const aux = string[string.length - 1 - i];
  string[string.length - 1 - i] = string[i];
  string[i] = aux;

  return reverseString(string, i + 1);
};

const result = reverseString(input, 0);
expect(result).toBe(target);
