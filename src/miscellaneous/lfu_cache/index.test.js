import LFUCache from './index';

const cache = LFUCache(2);

test('LFU Cache access first element', () => {
  cache.put(1);
  cache.put(2);
  expect(cache.get(1)).toStrictEqual(1);
});

test('LFU Cache access not found element', () => {
  cache.put(3);
  expect(cache.get(2)).toStrictEqual(null);
});

test('LFU Cache access element for second time', () => {
  expect(cache.get(3)).toStrictEqual(3);
});

test('LFU Cache access not found element for second time', () => {
  cache.put(4);
  expect(cache.get(1)).toStrictEqual(null);
});

test('LFU Cache access element for third time', () => {
  expect(cache.get(3)).toStrictEqual(3);
});

test('LFU Cache access element for fourth time', () => {
  expect(cache.get(4)).toStrictEqual(4);
});

test('LFU Cache access element ton of times', () => {
  cache.get(3);
  cache.get(3);
  cache.get(3);
  cache.get(3);
  cache.get(3);
  cache.get(4);
  cache.put(5);
  expect(cache.get(3)).toStrictEqual(3);
});

test('LFU Cache access incorrect value', () => {
  expect(cache.get('wrong type')).toStrictEqual(null);
});
