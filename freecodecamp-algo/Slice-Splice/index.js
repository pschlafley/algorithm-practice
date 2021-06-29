function frankenSplice(arr1, arr2, n) {
    let arr2Cp = arr2.slice();

    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];
        console.log(num)
        arr2Cp.splice(n, 0, num)
    }
    console.log(arr2Cp)
    return arr2Cp;
}

frankenSplice([1, 2, 3], [4, 5], 1);