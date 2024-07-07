import UnionFind from './index';

let uf;

beforeEach(() => {
    uf = new UnionFind(5);
});

test('Union find basic operations', () => {
    uf = new UnionFind(3);

    expect(uf.union(0, 1)).toEqual(true);
    expect(uf.union(0, 1)).toEqual(false);
    expect(uf.union(1, 2)).toEqual(true);
    expect(uf.union(0, 2)).toEqual(false);
});
