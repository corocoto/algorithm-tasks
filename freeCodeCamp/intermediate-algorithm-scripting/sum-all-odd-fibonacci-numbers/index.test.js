const sumFibs = require('./index');

describe('`sumFibs` function', () => {
    it('`sumFibs(1)` should return a number', () => {
        expect(typeof sumFibs(1)).toEqual('number');
    });

    it('`sumFibs(1)` should return 2', () => {
        expect(sumFibs(1)).toEqual(2);
    });

    it('`sumFibs(1000)` should return 1785', () => {
        expect(sumFibs(1000)).toEqual(1785);
    });

    it('`sumFibs(4000000)` should return 4613732', () => {
        expect(sumFibs(4000000)).toEqual(4613732);
    });

    it('`sumFibs(4)` should return 5', () => {
        expect(sumFibs(4)).toEqual(5);
    });

    it('`sumFibs(75024)` should return 60696', () => {
        expect(sumFibs(75024)).toEqual(60696);
    });

    it('`sumFibs(75025)` should return 135721', () => {
        expect(sumFibs(75025)).toEqual(135721);
    });
})