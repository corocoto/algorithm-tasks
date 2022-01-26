const isOdd = number => number % 2 !== 0;

function sumFibs(num) {
    let sum = 0;
    let currentNumber = 1;
    let previousNumber = 0;
    while (currentNumber <= num) {
        if (isOdd(currentNumber)) {
            sum += currentNumber;
        }
        [currentNumber, previousNumber] = [currentNumber + previousNumber, currentNumber];
    }
    return sum;
}

module.exports = sumFibs;