const translatePigLatin = require('./index');

describe('Testing `translatePigLatin` function', () => {
  test('should return "aliforniacay" if sends "california"', () => {
    expect(translatePigLatin("california")).toEqual("aliforniacay")
  });

  test('should return "aragraphspay" if sends "paragraphs"', () => {
    expect(translatePigLatin("paragraphs")).toEqual("aragraphspay")
  });

  test('should return "oveglay" if sends "glove"', () => {
    expect(translatePigLatin("glove")).toEqual("oveglay")
  });

  test('should return "algorithmway" if sends "algorithm"', () => {
    expect(translatePigLatin("algorithm")).toEqual("algorithmway")
  });

  test('should return "eightway" if sends "eight"', () => {
    expect(translatePigLatin("eight")).toEqual("eightway")
  });

  test('should return "artzschway" if sends "schwartz"', () => {
    expect(translatePigLatin("schwartz")).toEqual("artzschway")
  });

  test('should return "rhythmay" if sends "rhythm"', () => {
    expect(translatePigLatin("rhythm")).toEqual("rhythmay")
  });
});