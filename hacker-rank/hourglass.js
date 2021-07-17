// this is taken from hacker rank


// constraints 
// -9 <= arr[i][j] <= 9
// 0 <= i, j <= 5

function hourglassSum(arr) {
    // the maximum value we can get is negative 63 (from the constraints up above)
    let max = -63

    // value of i = each row
    // value of j = each column
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let sum = 0

            sum = (
                // start at the first row and get the first number in the first column
                arr[i][j] +
                // stay in the first row but get the next number in the second column
                arr[i][j + 1] +
                // get the third number in the third column
                arr[i][j + 2] +
                // move down to the second row and get the second value from the second column
                arr[i + 1][j + 1] +
                // move down to the third row and get the first value from the first column
                arr[i + 2][j] +
                // get the second value from the second column
                arr[i + 2][j + 1] +
                // get the third value from the third column
                arr[i + 2][j + 2])
            // if max is less than the sum then return the sum value otherwise return the max value 
            max = max < sum ? sum : max
        }
    };

    return max;
}