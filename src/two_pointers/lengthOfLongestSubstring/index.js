export function lengthOfLongestSubstring(s) {
    let i = 0,
        j = 0;
    if (!s || !s.length) return 0;

    let count = 1;
    let hash = { [s[0]]: true };
    while (i <= j && j < s.length - 1) {
        j++;
        while (hash[s[j]] && i <= j) {
            hash[s[i]] = false;
            i++;
        }
        hash[s[j]] = true;
        count = Math.max(count, j - i + 1);
    }

    return count;
}
