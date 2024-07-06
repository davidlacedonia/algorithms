import { levelOrder } from '.';

test('Level order', () => {
  const output = levelOrder({
    val: 3,
    left: { val: 9, left: { val: 6 } },
    right: { val: 20, left: { val: 15 }, right: { val: 7 } },
  });
  expect(output).toEqual([[3], [9, 20], [6, 15, 7]]);
});
