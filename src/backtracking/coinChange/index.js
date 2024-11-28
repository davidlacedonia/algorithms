export function coinChange(coins, amount) {
    let memo = {};

    const backtrack = (n, total) => {
        if (total === 0) return 0;
        if (total < 0) return Infinity;
        if (memo[total] !== undefined) return memo[total];

        let min = Infinity;
        for (let coin of coins) {
            const rest = total - coin;
            min = Math.min(backtrack(n + 1, rest) + 1, min);
        }

        memo[total] = min;
        return memo[total];
    };

    const result = backtrack(0, amount);
    return result === Infinity ? -1 : result;
}
