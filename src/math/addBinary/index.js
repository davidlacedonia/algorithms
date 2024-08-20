export function addBinary(a, b) {
    let output = '',
        carry = 0;

    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) sum += +a[i--];
        if (j >= 0) sum += +b[j--];
        output = (sum % 2) + output;
        carry = Math.floor(sum / 2);
    }

    if (carry) output = carry + output;
    return output;
}
