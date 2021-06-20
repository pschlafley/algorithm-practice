function titleCase(str) {
    // seperate each word by splitting str into an array 
    let splitStr = str.split(' ');
    // create empty string and array variables
    let aStr = "";
    let words = [];
    let finalStr = '';

    // loop through splitStr so that we can isolate each word
    for (let i = 0; i < splitStr.length; i++) {
        // isolate each word in splitStr array
        let word = splitStr[i];
        // get the first letter of each word
        let bStr = word.substr(0, 1);
        // get the remaining letters after the first letter for each word
        let cStr = word.substr(1, word.length);

        // make every first letter upper case
        let bStrUp = bStr.toUpperCase();
        // make every other letter in each word lower case
        let cStrLow = cStr.toLowerCase();

        // add the capitalized first letters of each word to the rest of the lower case letters
        aStr = bStrUp + cStrLow;
        // push aStr into the words array
        words.push(aStr);
    }
    // call the join method on the words array so that it creates spaces in between words but removes unnecessary white space at the end of the string
    finalStr = words.join(' ');

    // return the final string with each first letter capitalized and the remaining letters lower case
    return finalStr;
};