function truncateString(str, num) {
    return num >= str.length ? str : str.substr(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);