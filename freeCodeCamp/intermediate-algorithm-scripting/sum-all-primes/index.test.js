const sumPrimes = require('./index');

describe('`sumPrimes` function', () => {
    it('`sumPrimes(10)` should return 17', () => {
        expect(sumPrimes(10)).toEqual(17);
    });

    it('sumPrimes(977) should return 73156 ', () => {
        expect(sumPrimes(977)).toEqual(73156);
    });
});