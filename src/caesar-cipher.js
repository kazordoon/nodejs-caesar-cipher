const { isNumber, isString } = require('./utils/typeof');

module.exports = function(text, leaps = 1) {
  try {
    if (!isString(text)) throw Error('The type of the text must be a string.');
    if (!isNumber(leaps)) throw Error('The type of the leap must be a number');
    if (leaps > 26) throw Error('The leap must be greater than 0 and less than 26');

    text = text.split(' ');
    let newText = [];
    
    text.forEach(word => {
      let newWord = '';

      Array.prototype.forEach.call(word, letter => {
        let code = letter.charCodeAt();
        for (let i = 0; i < leaps; i++) {
          code++;
          if (code === 123) {
            // The ASCII code of 'z' is 122
            // So if you pass it, the code will be 97, that's the ASCII code of 'a'
            code = 97;
          } else if (code === 91) {
            // The ASCII code of 'Z' is 90
            // So if you pass it, the code will be 65, that's the ASCII code of 'A'
            code = 65;
          }
        }
        newWord += String.fromCharCode(code);
      });
      newText.push(newWord);
    });
    
    newText = newText.join(' ');
    return newText;

  } catch (err) {
    return err.message;
  }
}
