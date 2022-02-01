const OPENING = ['(', '[', '{']

const MATCH = {
    ')': '(',
    ']': '[',
    '}': '{',
}

/**
 * @param {string} str parenthesis
 * @return {boolean} is valid
 */
/**
 * Valid parenthesis.
 *
 * @author David Lacedonia <davidlacedonia@gmail.com>
 */
 function isValid(str) {
    let stack = []
    
    for (let c of str.split('')) {
        if (OPENING.includes(c)) {
            stack.push(c)
        } else {
            if (stack.pop() !== MATCH[c]) {
                return false
            }
        }
    }
    
    return !stack.length
}

export default isValid