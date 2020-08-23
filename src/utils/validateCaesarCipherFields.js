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

  return error;
}

module.exports = validateCaesarCipherFields;
