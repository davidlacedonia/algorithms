export function groupAnagrams(strs) {
    let map = {};

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const letters = word.split('').sort();
        if (!map[letters]) map[letters] = [];
        map[letters].push(word);
    }

    return Object.values(map);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
