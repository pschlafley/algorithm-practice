function findElement(arr, func) {
    // create empty array to store truthy values in
    let newArr = [];
    // loop through the given array and for each number in the array check to see if func is true
    // if func passes as true push that number into newArr else return undefined
    for (let i = 0; i < arr.length; i++) {
        let aNum = arr[i];
        func(aNum) ? newArr.push(aNum) : undefined;
    }
    // return the first number in the newArr array
    return newArr[0];
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);