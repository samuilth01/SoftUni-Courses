function lettersChangeNumbers (input) {
    let words = input.split(' ').filter((el) => el !== '');
    let totalSum = 0;
    let isUpperCase = (lettter) => lettter.toUpperCase() === lettter;
    let getAlphabetPosition = (lettter) => lettter.charCodeAt(0) - 96;

    words.forEach((word) => {
        let letterBefor = word[0];
        let lastLetter = word[word.length - 1];
        let number = Number(word.substring(1, word.length - 1));
        let beforePosition = getAlphabetPosition(letterBefor.toLowerCase());
        let afterPosition = getAlphabetPosition(lastLetter.toLowerCase());

        if (isUpperCase(letterBefor)) {
            number /= beforePosition;
        } else {
            number *= beforePosition;
        }

        if (isUpperCase(lastLetter)) {
            number -= afterPosition;
        } else {
            number += afterPosition;
        }
        totalSum += number;
    }) 
    console.log(totalSum.toFixed(2));
} 

lettersChangeNumbers ('A12b s17G');
console.log('---');
lettersChangeNumbers ('P34562Z q2576f   H456z');
console.log('---');
lettersChangeNumbers ('a1A');