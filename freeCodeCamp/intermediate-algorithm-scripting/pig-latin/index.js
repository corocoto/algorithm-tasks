const {CONSONANTS_REG_EXP} = require('./constants');

/**
 * @param str
 * @return {string}
 */
function translatePigLatin(str) {
  const foundConsonants = str.match(CONSONANTS_REG_EXP);
  if (foundConsonants) {
    return `${str.replace(CONSONANTS_REG_EXP, '')}${foundConsonants[0]}ay`;
  }
  return `${str}way`;
}

module.exports = translatePigLatin;