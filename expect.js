const isArrayEqual = (left, right) => {
  let equal = true;

  for (let i = 0; i < right.length && !!equal; i++) {
    if (left[i] !== right[i]) {
      equal = false;
    }
  }

  return equal;
};

const compare = (left, right) => {
  let equal = false;

  if (Array.isArray(right)) {
    equal = isArrayEqual(left, right);
  } else {
    equal = right === left;
  }

  return equal;
};

const expect = (result) => {
  const storedResult = result;

  return {
    toBe: (expected) => {
      let isEqual = compare(storedResult, expected);

      if (isEqual) {
        console.log("Success ", storedResult);
      } else {
        console.warn("Error", storedResult, expected);
      }
    },
  };
};

module.exports = {
  expect: expect,
};
