function repeatStringNumTimes(str, num) {
    let newStr = "";
    let i = 0;

    // if num is less than or equal to 0 return an empty string
    if (num <= 0) {
        return "";
    };

    // while i is less than num append str to the newStr variable
    while (i < num) {
        newStr += str;
        i++;
    }

    return newStr;
}

repeatStringNumTimes("abc", 3);