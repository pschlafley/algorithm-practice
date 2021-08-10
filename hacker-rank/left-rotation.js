function rotLeft(a, d) {
    let tracker = 0;

    for (let i = 0; i < a.length; i++) {
        if (tracker > d) {
            return;
        }

        while (tracker < d) {
            // remove the first element in the array
            // then push that element to the end of the array to "rotate it to the left"
            a.push(a.shift())
            tracker++;
        }
    }
    return a;
};