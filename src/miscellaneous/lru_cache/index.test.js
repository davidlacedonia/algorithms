import LRUCache from './index';

test('LRU cache access first element', () => {
    const cache = LRUCache(2);
    cache.put(1);
    cache.put(2);
    const result = cache.get(1);
    expect(result).toStrictEqual(1);
});

test('LRU cache access removed item', () => {
    const cache = LRUCache(2);
    cache.put(1);
    cache.put(2);
    cache.get(1);
    cache.put(3);
    const result = cache.get(2);
    expect(result).toStrictEqual(-1);
});

test('LRU cache access item after another removal', () => {
    const cache = LRUCache(2);
    cache.put(1);
    cache.put(2);
    cache.get(1);
    cache.put(3);
    cache.get(2);
    cache.put(4);
    cache.get(1);
    const result = cache.get(3);
    expect(result).toStrictEqual(3);
});
