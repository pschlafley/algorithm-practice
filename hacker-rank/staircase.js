function staircase(n) {
    let string = '';
    let arr = [];

    for (let i = 1; i <= n; i++) {
        string += '#';
        let padStr = string.padStart(n, ' ');
        arr.push(padStr);
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}