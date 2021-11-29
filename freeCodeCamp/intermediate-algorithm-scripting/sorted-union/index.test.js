const uniteUnique = require('./index');

describe('Testing `uniteUnique` function', () => {
    test('Should return `[1, 3, 2, 5, 4]` if send `[1, 3, 2], [5, 2, 1, 4], [2, 1]` as arguments', () => {
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
    });

    test('Should return `[1, 2, 3, 5]` if send `[1, 2, 3], [5, 2, 1]` as arguments', () => {
        expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
    });

    test('Should return `[1, 2, 3, 5, 4, 6, 7, 8]` if send `[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]` as arguments', () => {
        expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    });
});