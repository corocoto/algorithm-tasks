// Link on the task: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const numStack = [];
    for (const token of tokens) {
        const tokenNumType = Number(token);

        if (!Number.isNaN(tokenNumType)) {
            numStack.push(tokenNumType);
            continue;
        }

        const secondNum = numStack.pop();
        const firstNum = numStack.pop();

        switch (token) {
            case '+':
                numStack.push(firstNum + secondNum);
                break;
            case '-':
                numStack.push(firstNum - secondNum);
                break;
            case '*':
                numStack.push(firstNum * secondNum);
                break;
            case '/':
                numStack.push(Math.trunc(firstNum / secondNum));
                break;
        }
    }

    return numStack.pop();
};
