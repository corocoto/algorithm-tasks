const {
  FIRST_UPPERCASE_LETTER_IN_THE_WORD,
  FIRST_LOWERCASE_LETTER_IN_THE_WORD
} = require('./constants');

/**
 *
 * @param {string} str
 * @param {string} before
 * @param {string }after
 * @return {string}
 */
function myReplace(str, before, after) {
  if (FIRST_UPPERCASE_LETTER_IN_THE_WORD.test(before)) {
    after = after.replace(FIRST_LOWERCASE_LETTER_IN_THE_WORD, letter => letter.toUpperCase());
  }
  if (FIRST_LOWERCASE_LETTER_IN_THE_WORD.test(before)) {
    after = after.replace(FIRST_UPPERCASE_LETTER_IN_THE_WORD, letter => letter.toLowerCase());
  }
  return str.replace(before, after);
}

module.exports = myReplace;