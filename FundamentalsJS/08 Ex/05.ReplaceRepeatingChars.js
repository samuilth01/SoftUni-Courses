function replaceRepeatingChars (input) {
    let newText = '';

    for (let i = 0; i < input.length; i++) {
        let currChar = input[i];
        let nextChar = input[i + 1];
        if (currChar !== nextChar) {
            newText += currChar;
        }
    }

    console.log(newText);
}

replaceRepeatingChars ('aaaaabbbbbcdddeeeedssaa');
console.log('----');
replaceRepeatingChars ('qqqwerqwecccwd');