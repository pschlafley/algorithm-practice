function solution(number) {
    let sum = 0;

    for (let i = number - 1; i >= 0; i--) {
        let num = i;

        if (num % 3 === 0 || num % 5 === 0) {
            sum += num;
        }
    }
    return sum;
}