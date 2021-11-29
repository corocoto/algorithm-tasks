function uniteUnique(...arr) {
    return Array.from(new Set(arr.flat()));
}

module.exports = uniteUnique;