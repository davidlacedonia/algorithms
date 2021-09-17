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
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  return this.traverse(prefix) != null
};

export default Trie