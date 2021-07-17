function destroyer(arr) {
    let newArr = [];

    const argsArr = [];
    for (const item in arguments) {
        argsArr.push(arguments[item])
    }

    const restArgs = argsArr.slice(1);

    for (const num of arr) {
        if (!restArgs.includes(num)) {
            newArr.push(num)
        }
    }

    return newArr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);