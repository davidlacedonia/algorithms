import { wordPattern } from '.';

test('Word pattern', () => {
  const output = wordPattern('abba', 'dog cat cat dog');
  expect(output).toEqual(true);
});

test('Word pattern', () => {
  const output = wordPattern('abba', 'dog cat lion dog');
  expect(output).toEqual(false);
});
