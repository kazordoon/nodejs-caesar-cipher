const assert = require('assert');
const caesarCipher = require('./caesar-cipher');

describe('Caesar Cipher', () => {
  it('should shuffle the word "Hello World"', () => {
    const expected = 'Ifmmp Xpsme';
    const given = caesarCipher('Hello World');
    assert.deepStrictEqual(expected, given);
  });
  it('should return an warning telling that the text is not a string', () => {
    const expected = 'The type of the text must be a string.';
    const given = caesarCipher(true);
    assert.deepStrictEqual(expected, given);
  });
  it('should return an warning telling that the leap is not a number', () => {
    const expected = 'The type of the leap must be a number';
    const given = caesarCipher('Hello World', true);
    assert.deepStrictEqual(expected, given);
  });
  it('should return an warning telling that the leap overwrote the number 26', () => {
    const expected = 'The leap must be greater than 0 and less than 26';
    const given = caesarCipher('Hello World', 27);
    assert.deepStrictEqual(expected, given);
  });
  it('should return the word "a" when the word "z" is provided', () => {
    const expected = 'a';
    const given = caesarCipher('z');
    assert.deepStrictEqual(expected, given);
  });
  it('should return the word "A" when the word "Z" is provided', () => {
    const expected = 'A';
    const given = caesarCipher('Z');
    assert.deepStrictEqual(expected, given);
  });
});
