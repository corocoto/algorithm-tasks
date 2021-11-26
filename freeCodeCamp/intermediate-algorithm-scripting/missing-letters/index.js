/**
 * @param {string} str
 * @return {string|undefined}
 */
function fearNotLetter(str) {
  let i = str.charCodeAt(0);
  const lastCharCode = str.charCodeAt(str.length - 1);
  while (i < lastCharCode) {
    i++;
    const checkingSymbol = String.fromCharCode(i);
    if (!str.includes(checkingSymbol)) {
      return checkingSymbol;
    }
  }
  return undefined;
}

module.exports = fearNotLetter;