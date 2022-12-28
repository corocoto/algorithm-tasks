var decodeMessage = function(key, message) {
    const A_CHAR_CODE = 'a'.charCodeAt();
    
    const hashMap = new Map();
    const keyWithoutSpaces = key.replace(/\s/g, '');
    const uniqueKeyArray = [...new Set(keyWithoutSpaces)];

    for (let i = 0; i < uniqueKeyArray.length; i++) {
        hashMap.set(uniqueKeyArray[i], String.fromCharCode(i + A_CHAR_CODE));
    }

    return Array.from(message).reduce((acc, symbol) => {
        acc += hashMap.has(symbol) ? hashMap.get(symbol) : ' ';
        return acc;
    }, '');
};
