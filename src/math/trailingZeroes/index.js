function factorial(n) {
    if (n === 1) return n;
    return n * factorial(n - 1);
}

function trailingZeroes(n) {
    let number = factorial(n);
    let zeroes = 0;

    while (number % 10 === 0) {
        number /= 10;
        zeroes++;
    }

    return zeroes;
}

export function trailingZeroes2(n) {
    let zeroes = 0;

    for (let i = 5; i <= n; i *= 5) {
        zeroes += Math.floor(n / i);
    }

    return zeroes;
}
