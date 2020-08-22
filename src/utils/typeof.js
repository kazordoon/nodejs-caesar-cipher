module.exports = {
  isNumber(number) {
    return Object.prototype.toString.call(number) === '[object Number]';
  },
  isString(string) {
    return Object.prototype.toString.call(string) === '[object String]';
  }
}
