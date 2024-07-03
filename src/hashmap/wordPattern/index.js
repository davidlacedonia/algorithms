export function wordPattern(pattern, s) {
  let charsMap = {};
  let wordsMap = {};
  let words = s.split(' ');

  if (words.length !== pattern.length) return false;

  for (let i = 0; i < words.length; i++) {
    const char = pattern[i];
    const word = words[i];
    if (!charsMap[char]) charsMap[char] = word;
    if (!wordsMap[word]) wordsMap[word] = char;
    if (charsMap[char] !== word || wordsMap[word] !== char) return false;
  }

  return true;
}
