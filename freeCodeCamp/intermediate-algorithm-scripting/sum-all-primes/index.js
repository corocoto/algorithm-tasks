function sumPrimes(num) {
    let sum = 0;
    let currentNum = 2;
    while (currentNum <= num) {
        let i = 1;
        let divCount = 1;
        while (i < currentNum) {
            if (currentNum % i === 0) {
                divCount++;
            }
            i++;
        }
        if (divCount <= 2) {
            sum += currentNum;
        }
        currentNum++;
    }
    return sum;
}

module.exports = sumPrimes;