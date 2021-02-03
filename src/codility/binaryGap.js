/**
 * solution O(n)
 *
 * @param {number} N integer value
 *
 * @return {numer} longest binary gap
 */
function solution(N) {
  const binary = N.toString(2);
  let gap = false;
  let count = 0;
  let max = 0;

  for (let i = 0; i < binary.length; i++) {
    const digit = binary[i];

    if (digit === '1') {
      if (gap) {
        max = Math.max(max, count);
      }
      count = 0;
      gap = true;
    } else {
      if (gap) {
        count++;
      }
    }
  }

  return max;
}
