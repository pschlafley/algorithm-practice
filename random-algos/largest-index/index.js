const getLargestIndex = (arr) => {
    let largestNum = 0;

    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];

        if (currentNum > nextNum) {
            largestNum = currentNum;
        }

        if (nextNum > currentNum) {
            largestNum = nextNum;
        }
    }

    let largestIndex = arr.indexOf(largestNum);

    return largestIndex;
};

