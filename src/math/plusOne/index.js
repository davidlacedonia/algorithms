export function plusOne(digits) {
    let lastIndex = digits.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        if (digits[i] >= 9) {
            digits[i] = 0;
        } else {
            digits[i] += 1;
            return digits;
        }
    }

    digits.unshift(1);

    return digits;
}
