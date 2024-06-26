import { canConstruct } from '.';

test('Can construct random note', () => {
  const output = canConstruct('a', 'b');
  expect(output).toBe(false);
});

test('Can construct random note', () => {
  const output = canConstruct('aa', 'ab');
  expect(output).toBe(false);
});

test('Can construct random note', () => {
  const output = canConstruct('aa', 'aab');
  expect(output).toBe(true);
});
