const { isNumber, isString } = require('./typeof');
const ValidationException = require('../errors/ValidationException');

function validateCaesarCipherFields(text, leaps) {
  let error = null;

  if (!isString(text)) {
    error = new ValidationException('The type of the text must be a string.');
  }

  if (!isNumber(leaps)) {
    error = new ValidationException('The type of the leap must be a number.');
  }

  const maxLeap = 26;
  const minLeap = 1;
  if (leaps > maxLeap || leaps < minLeap) {
    error = new ValidationException(
      'The leap must be greater than 0 and less than 26.',
    );
  }

  return error;
}

module.exports = validateCaesarCipherFields;
