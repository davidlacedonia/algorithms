export function twoSum(numbers, target) {
    let i = 0,
        j = numbers.length - 1;

    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) return [i + 1, j + 1];
        if (sum < target) {
            i++;
        } else {
            j--;
        }
    }

    return null;
}
