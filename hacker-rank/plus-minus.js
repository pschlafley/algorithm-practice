function plusMinus(arr) {
    const arrLen = arr.length;
    let obj = {
        minus: 0,
        positive: 0,
        zero: 0
    };

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num < 0) {
            obj.minus += 1;
        } else if (num > 0) {
            obj.positive += 1;
        } else if (num === 0) obj.zero += 1;
    }

    let minusRatio = obj.minus / arrLen;
    let positiveRatio = obj.positive / arrLen;
    let zeroRatio = obj.zero / arrLen;

    console.log(positiveRatio.toFixed(6));
    console.log(minusRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}