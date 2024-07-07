export function canConstruct(ransomNote, magazine) {
    const map = {};
    const letters = magazine.split('');

    for (let i = 0; i < magazine.length; i++) {
        map[letters[i]] = (map[letters[i]] || 0) + 1;
    }

    const ransomLetters = ransomNote.split('');
    for (let i = 0; i < ransomLetters.length; i++) {
        if (!map[ransomLetters[i]]) return false;
        map[ransomLetters[i]] -= 1;
    }

    return true;
}
