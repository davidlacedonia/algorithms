/**
 * Trie.
 * 
 * Is a tree data structure used to efficiently 
 * store and retrieve keys in a dataset of strings.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 */

 var Trie = function() {
  this.root = {}
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.root

  for (let c of word) {
    if (node[c] == null) node[c] = {}
    node = node[c]
  }

  node.isEnd = true
};

Trie.prototype.traverse = function(word) {
  let node = this.root

  for (let c of word) {
    node = node[c]
    if (node == null) return null
  }

  return node
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  const node = this.traverse(word)
  return node != null && node.isEnd === true
};

/**
 * Word may contain dots '.' 
 * where dots can be matched with any letter
 * 
 * @param {string} word
 * @returns {boolean}
 */
Trie.prototype.complexSearch = function(word, curr = this.root) {
  if (!word) return !!curr.isEnd
  
  let c = word[0]
  if (c === '.') {
      const _keys = Object.keys(curr)
      if ((_keys[0] === 'isEnd' && _keys.length === 1) || !_keys.length) {
        return false
      }
      for (let k of _keys.filter(k => k !== 'isEnd')) {
          if (this.complexSearch(word.slice(1), curr[k])) {
            return true
          }
      }
      return false
  } else {
      if (!curr[c]) {
          return false
      } else {
          return this.complexSearch(word.slice(1), curr[c])
      }
  }
}

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  return this.traverse(prefix) != null
};

export default Trie