export function isPalindrome(x) {
    if (x < 0) return false;
    let number = 0;
    let _x = x;

    while (_x > 0) {
        number = number * 10 + (_x % 10);
        _x = Math.floor(_x / 10);
    }

    return number === x;
}
