import { simplifyPath } from '.';

test('Simplify path', () => {
    const output = simplifyPath('/home/');
    expect(output).toEqual('/home');
});

test('Simplify path', () => {
    const output = simplifyPath('//home//foo/');
    expect(output).toEqual('/home/foo');
});

test('Simplify path', () => {
    const output = simplifyPath('//home/user/Documents/../Pictures');
    expect(output).toEqual('/home/user/Pictures');
});

test('Simplify path', () => {
    const output = simplifyPath('..');
    expect(output).toEqual('/');
});

test('Simplify path', () => {
    const output = simplifyPath('//.../a/../b/c/../d/./');
    expect(output).toEqual('/.../b/d');
});
