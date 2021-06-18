function confirmEnding(str, target) {
    // find the index of the target variable
    const num = target.length;

    // return true if the string ends with the given target string
    // -num will tell the substring method to start at whatever the negative length value of target is
    return str.substr(-num) === target ? true : false;

}

confirmEnding("Bastian", "n");