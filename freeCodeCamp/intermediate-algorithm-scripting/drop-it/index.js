function dropElements(arr, func) {
    const foundIndex = arr.findIndex(func);
    return foundIndex === - 1 ? [] : arr.slice(foundIndex);
}

module.exports = dropElements;