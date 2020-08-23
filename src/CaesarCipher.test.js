const assert = require('assert');
const CaesarCipher = require('./CaesarCipher');
const ValidationException = require('./errors/ValidationException');

describe('Caesar Cipher', () => {
  it('should shuffle the word "Hello World"', () => {
    const expected = 'Ifmmp Xpsme';
    const actual = CaesarCipher.shuffle('Hello World');
    assert.deepStrictEqual(expected, actual);
  });

  it('should return the word "a" when the word "z" is provided', () => {
    const expected = 'a';
    const actual = CaesarCipher.shuffle('z');
    assert.deepStrictEqual(expected, actual);
  });

  it('should return the word "A" when the word "Z" is provided', () => {
    const expected = 'A';
    const actual = CaesarCipher.shuffle('Z');
    assert.deepStrictEqual(expected, actual);
  });

  context('when an validation error occurs', () => {
    it('should return an exception telling that the text is not a string', () => {
      const expected = new ValidationException(
        'The type of the text must be a string.'
      );
      const actual = CaesarCipher.shuffle(true);

      assert.deepStrictEqual(actual instanceof ValidationException, true);
      assert.deepStrictEqual(expected, actual);
    });

    it('should return an exception telling that the leap is not a number', () => {
      const expected = new ValidationException(
        'The type of the leap must be a number.'
      );
      const actual = CaesarCipher.shuffle('Hello World', true);

      assert.deepStrictEqual(actual instanceof ValidationException, true);
      assert.deepStrictEqual(expected, actual);
    });
  });
});
