function digPow(n, p) {
    n = String(n);
    let nArr = n.split('');
    let sum = 0;
    let k = 0;

    nArr.reduce((acc, num, index) => {
        let numPower = Math.pow(num, (p + index));
        sum += numPower;
    }, 0);

    k += sum / n;
    let stringK = k.toString();

    // if k is not an integer return -1
    if (stringK.includes('.')) {
        return -1;
    }

    if (n * k === sum) {
        return k;
    }


    return -1;
}