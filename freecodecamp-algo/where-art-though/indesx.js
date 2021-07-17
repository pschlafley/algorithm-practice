function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let newObj = { first: "", last: "" }
    let multiArr = [];
    let sourceArr = Object.values(source);

    for (let i = 0; i < collection.length; i++) {
        let objArr = Object.values(collection[i]);
        multiArr.push(objArr)
    }

    let sourceStr = sourceArr.toString();

    for (let j = 0; j < multiArr.length; j++) {
        let arr = multiArr[j];
        if (arr.includes(sourceStr)) {
            newObj.first = arr[0];
            newObj.last = arr[1];
        }
    }

    arr.push(newObj)
    // Only change code above this line
    return arr;
}

whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" });