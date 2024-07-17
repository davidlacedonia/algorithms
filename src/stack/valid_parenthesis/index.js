const match = {
    '(': ')',
    '[': ']',
    '{': '}',
};

export function isValid(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];
        if (['(', '[', '{'].includes(bracket)) {
            stack.push(bracket);
        } else {
            const lastBracket = stack.pop();
            if (match[lastBracket] !== bracket) return false;
        }
    }

    return !stack.length;
}
