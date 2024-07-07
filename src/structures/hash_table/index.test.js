import Hashtable from './index';

test('HashTable creation', () => {
    const hashTable = new Hashtable();
    hashTable.put('hi', 'hello');
    hashTable.put('abc', 'abcedefghijklmnoprs');
    hashTable.put('aa', 'amazing asteroid');
    hashTable.put('qs', 'query string');
    hashTable.put('pl', 'premier league');
    expect(hashTable.get('aa')).toEqual('amazing asteroid');
});
