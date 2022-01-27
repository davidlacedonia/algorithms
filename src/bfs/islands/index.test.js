import islands from "./index";

test("number of islands example one", () => {
  const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  expect(islands(grid)).toEqual(1);
});

test("number of islands example two", () => {
  const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  expect(islands(grid)).toEqual(3);
});
