function pascalCaseSplitter (input) {
    let arrOfWords = [];
    let word = '';

    for (let i = 0; i < input.length; i++) {
        let currChar = input[i];
        let asciiPosition = currChar.charCodeAt(0);
        if (asciiPosition >= 65 && asciiPosition <= 90) {
            if (i !== 0) {
                arrOfWords.push(word);
            }
            word = '';
            word += currChar;
        } else {
            word += currChar;
        }
    }
    arrOfWords.push(word);
    console.log(arrOfWords.join(', '));
}

pascalCaseSplitter ('SplitMeIfYouCanHaHaYouCantOrYouCan');