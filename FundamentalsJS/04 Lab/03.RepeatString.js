function repeatString (str, n) {
    let result = str;
    for (let i = 1; i < n; i++) {
        result += str;
    }
    return result;
}

console.log(repeatString ("abc", 3));