export function combinationSum(candidates, target) {
    const output = [];

    const backtrack = (numbers = [], sum = 0) => {
        if (sum === target) {
            const sorted = numbers.sort().join('-');
            if (!output.includes(sorted)) output.push(sorted);
        }

        for (let i = 0; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                backtrack([...numbers, candidates[i]], sum + candidates[i]);
            }
        }
    };

    backtrack();
    return output.map((o) => o.split('-').map(Number));
}
