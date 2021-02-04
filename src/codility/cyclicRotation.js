function solution(A, K) {
  K = K > A.length ? K % A.length : K;
  const startIndex = A.length - K;

  if (startIndex === 0 || startIndex === A.length) return A;

  return [...A.slice(startIndex), ...A.slice(0, startIndex)];
}
