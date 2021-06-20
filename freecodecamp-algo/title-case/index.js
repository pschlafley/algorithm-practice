function titleCase(str) {
    let splitStr = str.split(' ')
    let aStr = "";

    for (let i = 0; i < splitStr.length; i++) {
        let word = splitStr[i];
        let bStr = word.substr(0, 1);
        let cStr = word.substr(1, word.length);

        let bStrUp = bStr.toUpperCase();
        let cStrLow = cStr.toLowerCase();

        aStr += bStrUp + cStrLow + ' ';
    }
    console.log(aStr);
    return aStr;
};

titleCase("I'm a little tea pot");