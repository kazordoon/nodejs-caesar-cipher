class ValidationException extends Error {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'ValidationException';
  }
}

module.exports = ValidationException;
