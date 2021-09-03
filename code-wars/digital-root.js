function digital_root(n) {
    // convert n into a string
    let stringNum = n.toString();
    //   split the converted string into an array
    let stringNumArr = stringNum.split('');
    let sum = 0;

    //   loop through the split array
    for (let i = 0; i < stringNumArr.length; i++) {
        //     get each value of the array
        let currentNum = stringNumArr[i];
        //     convert each number in the loop back into a Number
        let numConversion = parseInt(currentNum);
        //     add the converted Numbers to the sum variable
        sum += numConversion;
    }
    //   create a string of the sum variable so that you can check the length of the number
    let sumString = sum.toString();

    //   if the length is = 1 then return the sum
    if (sumString.length == 1) {
        return sum;
        // if the length is still greater than 1 then call the digital_root function again but passing in
        // sum as the new argument to go through the whole process again 
    } else if (sumString.length > 1) {
        return digital_root(sum);
    }
}