export function hammingWeight(n) {
    let weight = 0;

    while (n) {
        if (n % 2 === 1) weight++;
        n = Math.floor(n / 2);
    }

    return weight;
}
