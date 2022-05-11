function charactersInRange (char1, char2) {
    let asciiNumOfFirst = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let asciiNumOfSecond = Math.max(char2.charCodeAt(0), char1.charCodeAt(0));
    let arr = [];

        for (let i = asciiNumOfFirst + 1; i < asciiNumOfSecond; i++) {
            arr.push(String.fromCharCode(i));
        }

    console.log(arr.join(' '));
}

charactersInRange ('a',
'd'
);