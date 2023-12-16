module.exports = {
  /**
   *
   * @param {number} number
   * @returns {boolean}
   */
  isNumber(number) {
    return Object.prototype.toString.call(number) === '[object Number]';
  },
  /**
   *
   * @param {string} string
   * @returns {boolean}
   */
  isString(string) {
    return Object.prototype.toString.call(string) === '[object String]';
  }
}
