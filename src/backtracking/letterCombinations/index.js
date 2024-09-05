const NUMBERS = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

export function letterCombinations(digits) {
    const combinations = [];

    const combine = (acc = '', pos = 0) => {
        if (acc.length === digits.length) {
            combinations.push(acc);
            return;
        }

        const currDigit = digits[pos];
        const letters = NUMBERS[currDigit];
        for (let i = 0; i < letters.length; i++) {
            combine(acc + letters[i], pos + 1);
        }
    };

    combine();
    return combinations;
}
