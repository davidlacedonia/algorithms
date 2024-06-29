import { isIsomorphic } from '.';

test('Is isomorphic', () => {
  const output = isIsomorphic('egg', 'add');
  expect(output).toBe(true);
});

test('Is isomorphic', () => {
  const output = isIsomorphic('foo', 'bar');
  expect(output).toBe(false);
});

test('Is isomorphic', () => {
  const output = isIsomorphic('title', 'paper');
  expect(output).toBe(true);
});
