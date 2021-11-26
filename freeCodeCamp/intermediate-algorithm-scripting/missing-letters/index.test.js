const fearNotLetter = require('./index');

describe('Testing `fearNotLetter` finction', () => {
  test('Should return "d" if sends "abce" argument', () => {
    expect(fearNotLetter('abce')).toEqual('d');
  });

  test('Should return "i" if sends "abcdefghjklmno" argument', () => {
    expect(fearNotLetter('abcdefghjklmno')).toEqual('i');
  });

  test('Should return "u" if sends "stvwx" argument', () => {
    expect(fearNotLetter('stvwx')).toEqual('u');
  });

  test('Should return "e" if sends "bcdf" argument', () => {
    expect(fearNotLetter('bcdf')).toEqual('e');
  });

  test('Should return undefined if sends "abcdefghijklmnopqrstuvwxyz" argument', () => {
    expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBeUndefined();
  });
});