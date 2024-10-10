export function wordBreak(s, wordDict) {
    let cache = [true];

    for (let i = 1; i <= s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (cache[j]) {
                const word = s.substr(j, i - j);
                if (wordDict.includes(word)) {
                    cache[i] = true;
                    break;
                }
            }
        }
    }

    return Boolean(cache[s.length]);
}
