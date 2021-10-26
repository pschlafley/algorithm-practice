function isPrime(num) {
    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function sumPrimes(num) {
    let i = 0;
    let primeArr = [];

    while (i <= num) {
        if (isPrime(i)) {
            primeArr.push(i);
        }
        i++;
    };

    const result = primeArr.reduce((prev, curr) => {
        let sum = prev + curr;
        return sum;
    });

    return result;
}

sumPrimes(10);