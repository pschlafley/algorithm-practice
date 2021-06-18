function repeatStringNumTimes(str, num) {
    let newStr = "";
    let i = 0;

    if (num <= 0) {
        return "";
    };

    while (i < num) {
        newStr += str;
        i++;
    }

    return newStr;
}

repeatStringNumTimes("abc", 3);