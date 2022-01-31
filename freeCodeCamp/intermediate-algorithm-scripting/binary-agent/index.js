function binaryAgent(str) {
    return str
        .split(' ')
        .map(binWord => String.fromCharCode(parseInt(binWord, 2)))
        .join('');
}

module.exports = binaryAgent;