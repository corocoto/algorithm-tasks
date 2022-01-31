const steamrollArray = require('./index');

describe('`steamrollArray` function:', () => {
    it('function with sending argument `[[["a"]], [["b"]]]` should return `["a", "b"]`', () => {
        expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a", "b"]);
    });

    it('function with sending argument `[1, [2], [3, [[4]]]]` should return `[1, 2, 3, 4]`', () => {
        expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
    });

    it('function with sending argument `[1, [], [3, [[4]]]]` should return `[1, 3, 4]`', () => {
        expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
    });

    it('function with sending argument `[1, {}, [3, [[4]]]]` should return `[1, {}, 3, 4]`', () => {
        expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4])
    });
})