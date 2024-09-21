export function reverseBits(n) {
    let binary = new Array(32).fill(0);
    let total = 0;

    let i = 0;
    while (n > 0) {
        binary[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }

    for (let i = 0; i < binary.length; i++) {
        if (binary[i]) total += Math.pow(2, 31 - i);
    }

    return total;
}
