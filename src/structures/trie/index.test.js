import Trie from './index'

let trie

beforeAll(() => {
  trie = new Trie()
})

test('Basic Trie operations', () => {
  trie.insert('apple')
  expect(trie.search('apple')).toEqual(true)
  expect(trie.search('app')).toEqual(false)
  expect(trie.startsWith('app')).toEqual(true)
  trie.insert('app')
  expect(trie.search('app')).toEqual(true)
})
