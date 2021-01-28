import { LIST, FLATTENED_LIST } from '../../data';
import flattenList from './index';

test('flatten list', () => {
  const result = flattenList(LIST);
  expect(result).toStrictEqual(FLATTENED_LIST);
});

test('flatten list with wrong value', () => {
  const result = flattenList('wrong value');
  expect(result).toStrictEqual(null);
});
