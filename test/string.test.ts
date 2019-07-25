import string from '../src/string';

describe('string', () => {
    test('get', () => {
        expect(string.codeLength('我')).toBe(2);
        expect(string.codeLength('hello')).toBe(5);
        expect(string.codeLength('你我1')).toBe(5);
    })
})