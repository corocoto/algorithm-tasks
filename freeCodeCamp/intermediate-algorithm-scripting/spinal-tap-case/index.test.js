const spinalCase = require('./index');

describe('Testing `spinalCase` function', () => {
  test('should return "this-is-spinal-tap" if sends "This Is Spinal Tap"',() => {
    expect(spinalCase('This Is Spinal Tap'));
  });

  test('should return "this-is-spinal-tap" if sends "thisIsSpinalTap"',() => {
    expect(spinalCase('thisIsSpinalTap')).toEqual('this-is-spinal-tap');
  });

  test('should return "the-andy-griffith-show" if sends "The_Andy_Griffith_Show"',() => {
    expect(spinalCase('The_Andy_Griffith_Show')).toEqual('the-andy-griffith-show');
  });

  test('should return "teletubbies-say-eh-oh" if sends "Teletubbies say Eh-oh"',() => {
    expect(spinalCase('Teletubbies say Eh-oh')).toEqual('teletubbies-say-eh-oh');
  });

  test('should return "all-the-small-things" if sends "AllThe-small Things"',() => {
    expect(spinalCase('AllThe-small Things')).toEqual('all-the-small-things');
  });
});