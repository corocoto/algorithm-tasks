// Link on the task: https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (const char of s) {
      if (char === ')') {
        if (stack.pop() === '(') {
          continue;
        }
        return false;
      }

      if (char === '}') {
        if (stack.pop() === '{') {
          continue;
        }
        return false;
      }

      if (char === ']') {
        if (stack.pop() == '[') {
          continue;
        }
        return false;
      }

      stack.push(char);
    }
    return stack.length === 0;
};
