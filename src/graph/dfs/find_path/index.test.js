import validPath from './index';

test('Valid path', () => {
  const n = 3;
  const edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ];
  const source = 0;
  const destination = 2;
  expect(validPath(n, edges, source, destination)).toEqual(true);
});

test('Valid path false', () => {
  const n = 6;
  const edges = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ];
  const source = 0;
  const destination = 5;
  expect(validPath(n, edges, source, destination)).toEqual(false);
});
