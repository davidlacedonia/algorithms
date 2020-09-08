import { ORDERED_ARRAY } from "../../data";
import jumpSearch from "./index";

test("jump search", () => {
  const result = jumpSearch(ORDERED_ARRAY, ORDERED_ARRAY[6]);
  expect(result).toStrictEqual(6);
});
