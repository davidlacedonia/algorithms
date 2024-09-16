export function combine(n, k) {
    let output = [];

    const backtrack = (n, k, acc = []) => {
        if (acc.length === k) {
            output.push([...acc]);
            return;
        }

        const last = (acc[acc.length - 1] || 0) + 1;
        for (let i = last; i <= n; i++) {
            // make choice
            acc.push(i);
            // backtrack
            backtrack(n, k, acc);
            // undo choice
            acc.pop();
        }
    };

    backtrack(n, k);
    return output;
}
