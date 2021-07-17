function sumAll(arr) {
    let sum = 0;
    // if the first number in the array is less than the second number
    // set i = the first number and make it <= the second number and increment up
    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
        return sum;

        // if the first number is greater than the second number
        // set i equal to the first number then make it >= the second number and increment down
    } else if (arr[0] > arr[1]) {
        for (let i = arr[0]; i >= arr[1]; i--) {
            sum += i;
        }
        return sum;
    }
    return sum;
}

sumAll([10, 5]);