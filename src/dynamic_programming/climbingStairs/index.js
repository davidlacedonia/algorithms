let cache = [];

export function climbStairsTopDown(n) {
    if (cache[n]) return cache[n];
    if (n === 1 || n === 2) return n;
    const output = climbStairsTopDown(n - 1) + climbStairsTopDown(n - 2);
    cache[n] = output;
    return output;
}

export function climbStairsBottomUp(n) {
    let dp = [1, 1];

    for (let i = 2; i <= n; i++) {
        dp.push(dp[dp.length - 1] + dp[dp.length - 2]);
    }

    return dp.pop();
}
