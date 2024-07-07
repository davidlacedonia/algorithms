import { isSymmetric } from '.';

test('Is symmetric', () => {
  const output = isSymmetric({
    val: 1,
    left: { val: 2, left: { val: 3 }, right: { val: 4 } },
    right: { val: 2, left: { val: 4 }, right: { val: 3 } },
  });
  expect(output).toEqual(true);
});

test('Is symmetric', () => {
  const output = isSymmetric({
    val: 1,
    left: { val: 2, right: { val: 3 } },
    right: { val: 2, right: { val: 3 } },
  });
  expect(output).toEqual(false);
});
