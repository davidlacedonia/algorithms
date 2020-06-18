const expect = (result) => {
  const storedResult = result;

  return {
    toBe: (expected) => {
      if (expected === storedResult) {
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
