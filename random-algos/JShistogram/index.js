function checkMagazine(arr) {
    let counts = {};
    for (const word of arr) {
        counts[word] = counts[word] ? counts[word] + 1 : 1;
    }
    console.log(counts)
}

checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night', 'give'])