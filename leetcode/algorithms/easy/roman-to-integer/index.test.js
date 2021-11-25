const romanToInt = require('./index');

describe('Testing romanToInt function', () => {
    test('should return 3 if sends "III"', () => {
        expect(romanToInt('III')).toEqual(3);
    });

    test('should return 4 if sends "IV"', () => {
        expect(romanToInt('IV')).toEqual(4);
    });

    test('should return 9 if sends "IX"', () => {
        expect(romanToInt('IX')).toEqual(9);
    });

    test('should return 58 if sends "LVIII"', () => {
        expect(romanToInt('LVIII')).toEqual(58);
    });

    test('should return 1994 if sends "MCMXCIV"', () => {
        expect(romanToInt('MCMXCIV')).toEqual(1994);
    });
})