module.exports = {
  isNumber(element) {
    return Object.prototype.toString.call(element) === '[object Number]' ? true : false;
  },
  isString(element) {
    return Object.prototype.toString.call(element) === '[object String]' ? true : false;
  }
}