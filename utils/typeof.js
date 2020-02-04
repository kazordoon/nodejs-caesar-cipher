module.exports = {
  isNumber(element) {
    return Object.prototype.toString.call(element) === '[object Number]';
  },
  isString(element) {
    return Object.prototype.toString.call(element) === '[object String]';
  }
}
