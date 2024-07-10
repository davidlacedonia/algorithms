export function isAnagram(s, t) {
    const map = {};

    for (let letter of s) {
        map[letter] = (map[letter] || 0) + 1;
    }

    for (let letter of t) {
        if (!map[letter]) return false;
        map[letter] -= 1;
        if (map[letter] < 0) return false;
        if (map[letter] === 0) delete map[letter];
    }

    return Object.keys(map).length === 0;
}
