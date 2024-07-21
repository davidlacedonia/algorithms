export function isHappy(n) {
    let hashmap = {};

    while (!hashmap[n]) {
        hashmap[n] = true;

        let total = 0;
        while (n) {
            total += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }

        if (total === 1) return true;
        n = total;
    }

    return false;
}
