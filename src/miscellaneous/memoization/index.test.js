import { ORDERED_ARRAY } from '../../data';
import linearSearch from '../../search/linear_search';
import memo from './index';

let memoizedLinearSearch;

beforeAll(() => {
    memoizedLinearSearch = memo(linearSearch);
});

test('memoization red (first time)', () => {
    const result = memoizedLinearSearch(ORDERED_ARRAY, 8);
    expect(result).toStrictEqual(7);
});

test('memoization blue', () => {
    const result = memoizedLinearSearch(ORDERED_ARRAY, 9);
    expect(result).toStrictEqual(8);
});

test('memoization red second time (faster)', () => {
    const result = memoizedLinearSearch(ORDERED_ARRAY, 8);
    expect(result).toStrictEqual(7);
});

test('memoization wrong value', () => {
    const memoizedWrongType = memo('wrong value');
    expect(memoizedWrongType).toStrictEqual(null);
});
