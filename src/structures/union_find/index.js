/**
 * Union find. (disjoint set)
 *
 * The primary use is to address the connectivity
 * between the components of a network.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 */
class UnionFind {
  constructor(size) {
    this.group = new Array(size).fill(0);
    this.rank = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
      this.group[i] = i;
    }
  }

  find(node) {
    if (this.group[node] != node) {
      this.group[node] = this.find(this.group[node]);
    }
    return this.group[node];
  }

  union(node1, node2) {
    let group1 = this.find(node1);
    let group2 = this.find(node2);

    if (group1 === group2) {
      return false;
    }

    if (this.rank[group1] > this.rank[group2]) {
      this.group[group2] = group1;
    } else if (this.rank[group1] < this.rank[group2]) {
      this.group[group1] = group2;
    } else {
      this.group[group1] = group2;
      this.rank[group2] += 1;
    }

    return true;
  }
}

export default UnionFind;
