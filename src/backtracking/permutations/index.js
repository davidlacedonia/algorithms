export function permute(nums) {
    let output = [];

    const backtrack = (_nums, acc = []) => {
        if (acc.length === nums.length) {
            output.push([...acc]);
            return;
        }

        for (let i = 0; i < _nums.length; i++) {
            acc.push(_nums[i]);
            backtrack([..._nums.slice(0, i), ..._nums.slice(i + 1)], acc);
            acc.pop();
        }
    };

    backtrack(nums);
    return output;
}
