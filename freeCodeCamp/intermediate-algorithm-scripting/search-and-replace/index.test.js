const myReplace = require('./index');

describe('Testing `myReplace` function', () => {
  test('Should return "Let us go to the mall" if we send next arguments: "Let us go to the store", "store", "mall"', () => {
    expect(myReplace('Let us go to the store', 'store', 'mall')).toEqual('Let us go to the mall');
  });

  test('Should return "He is Sitting on the couch" if we send next arguments: "He is Sleeping on the couch", "Sleeping", "sitting"', () => {
    expect(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toEqual('He is Sitting on the couch');
  });

  test('Should return "I think we should look down there" if we send next arguments: "I think we should look up there", "up", "Down"', () => {
    expect(myReplace('I think we should look up there', 'up', 'Down')).toEqual('I think we should look down there');
  });

  test('Should return "This has a spelling error" if we send next arguments: "This has a spellngi error", "spellngi", "spelling"', () => {
    expect(myReplace("This has a spellngi error", "spellngi", "spelling")).toEqual('This has a spelling error');
  });

  test('Should return "His name is John" if we send next arguments: "His name is Tom", "Tom", "john"', () => {
    expect(myReplace('His name is Tom', 'Tom', 'john')).toEqual('His name is John');
  });

  test('Should return "Let us get back to more Algorithms" if we send next arguments: "Let us get back to more Coding", "Coding", "algorithms"', () => {
    expect(myReplace('Let us get back to more Coding', 'Coding', 'algorithms')).toEqual('Let us get back to more Algorithms');
  });
});