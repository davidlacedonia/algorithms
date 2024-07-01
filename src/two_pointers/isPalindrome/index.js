function validCharacter(c) {
  const code = c.charCodeAt();
  if (code >= 97 && code <= 122) return true;
  if (code >= 65 && code <= 90) return true;
  if (code >= 48 && code <= 57) return true;
  return false;
}

export function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    while (!validCharacter(s[i]) && i < j) i++;
    while (!validCharacter(s[j]) && i < j) j--;
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  }

  return true;
}
