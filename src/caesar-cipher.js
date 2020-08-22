const validateCaesarCipherFields = require('./utils/validateCaesarCipherFields');
const ValidationException = require('./errors/ValidationException');

function caesarCipher(text, leaps = 1) {
  const error = validateCaesarCipherFields(text, leaps);
  if (error) {
    return new ValidationException(error.message);
  }

  const words = text.split(' ');
  const shuffledWords = words
    .map((word) => {
      const letters = Array.from(word);

      const charCodes = letters.map((letter) => {
        let letterASCIICode = letter.charCodeAt();
        const lowerACode = 'a'.charCodeAt();
        const upperACode = 'A'.charCodeAt();
        const lowerZCode = 'z'.charCodeAt();
        const upperZCode = 'Z'.charCodeAt();

        for (let i = 0; i < leaps; i++) {
          letterASCIICode++;
          const exceededTheLowerZCode = letterASCIICode === lowerZCode + 1;
          const exceededTheUpperZCode = letterASCIICode === upperZCode + 1;

          if (exceededTheLowerZCode) {
            letterASCIICode = lowerACode;
          } else if (exceededTheUpperZCode) {
            letterASCIICode = upperACode;
          }
        }
        return letterASCIICode;
      });

      const shuffledWord = String.fromCharCode(...charCodes);
      return shuffledWord;
    })
    .join(' ');
  return shuffledWords;
}

module.exports = caesarCipher;
