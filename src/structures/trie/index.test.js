import Trie from './index';

let trie;

beforeEach(() => {
    trie = new Trie();
});

test('Basic Trie operations', () => {
    trie.insert('apple');
    expect(trie.search('apple')).toEqual(true);
    expect(trie.search('app')).toEqual(false);
    expect(trie.startsWith('app')).toEqual(true);
    trie.insert('app');
    expect(trie.search('app')).toEqual(true);
});

test('Complex search', () => {
    trie.insert('bad');
    trie.insert('dad');
    trie.insert('mad');
    expect(trie.complexSearch('pad')).toEqual(false);
    expect(trie.complexSearch('bad')).toEqual(true);
    expect(trie.complexSearch('.ad')).toEqual(true);
    expect(trie.complexSearch('b..')).toEqual(true);
});

test('Complex search second example', () => {
    trie.insert('a');
    trie.insert('a');
    expect(trie.complexSearch('.')).toEqual(true);
    expect(trie.complexSearch('a')).toEqual(true);
    expect(trie.complexSearch('aa')).toEqual(false);
    expect(trie.complexSearch('a')).toEqual(true);
    expect(trie.complexSearch('.a')).toEqual(false);
    expect(trie.complexSearch('a.')).toEqual(false);
});

test('Complex search third example', () => {
    trie.insert('at');
    trie.insert('and');
    trie.insert('an');
    trie.insert('add');
    expect(trie.complexSearch('a')).toEqual(false);
});

test('Complex search fourth example', () => {
    trie.insert('a');
    trie.insert('ab');
    expect(trie.complexSearch('a')).toEqual(true);
    expect(trie.complexSearch('a.')).toEqual(true);
});

test('Complex search fifth example', () => {
    trie.insert('at');
    trie.insert('and');
    trie.insert('an');
    trie.insert('add');
    expect(trie.complexSearch('a')).toEqual(false);
    expect(trie.complexSearch('.at')).toEqual(false);
    trie.insert('bat');
    expect(trie.complexSearch('.at')).toEqual(true);
    expect(trie.complexSearch('an.')).toEqual(true);
});

test('Complex search fifth example', () => {
    trie.insert('ran');
    trie.insert('rune');
    trie.insert('runner');
    trie.insert('runs');
    trie.insert('add');
    trie.insert('adds');
    trie.insert('adder');
    trie.insert('addee');
    expect(trie.complexSearch('r.n')).toEqual(true);
});
