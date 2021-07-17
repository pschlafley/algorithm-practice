function diffArray(arr1, arr2) {
    var newArr = [];
    let trashArr = [];

    for (let i = 0; i < arr2.length; i++) {
        let item = arr2[i];

        if (arr1.includes(item)) {
            trashArr.push(item);
        } else {
            newArr.push(item)
        }
    };

    for (let i = 0; i < arr1.length; i++) {
        let item = arr1[i];
        if (arr2.includes(item)) {
            trashArr.push(item);
        } else {
            newArr.push(item)
        }
    }
    console.log(newArr)

    return newArr;
}
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);