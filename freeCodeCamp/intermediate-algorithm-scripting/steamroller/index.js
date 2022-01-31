function steamrollArray(arr) {
    const flatArr = [].concat(...arr);
    return flatArr.some(Array.isArray) ? steamrollArray(flatArr) : flatArr;
}

// You can also resolve this task via `Array.flat()` or `Array.flatMap()`. But on it description you can't.

module.exports = steamrollArray;