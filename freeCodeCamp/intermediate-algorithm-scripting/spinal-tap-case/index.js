function spinalCase(str) {
  return str
    .replace(/_|\s+|([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

module.exports = spinalCase;