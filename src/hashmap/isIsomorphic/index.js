export function isIsomorphic(s, t) {
    let map = {};
    let match = {};

    for (let i = 0; i < t.length; i++) {
        const left = s[i];
        const right = t[i];

        if (map[left]) {
            if (map[left] !== right) return false;
        } else {
            if (match[right]) return false;
            map[left] = right;
            match[right] = left;
        }
    }

    return true;
}
