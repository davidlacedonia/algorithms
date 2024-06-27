import { averageOfLevels } from './';

test('BFS Average of levels', () => {
  const output = averageOfLevels({
    val: 3,
    left: {
      val: 9,
    },
    right: {
      val: 20,
      left: {
        val: 15,
      },
      right: {
        val: 7,
      },
    },
  });
  expect(output).toEqual([3, 14.5, 11]);
});
