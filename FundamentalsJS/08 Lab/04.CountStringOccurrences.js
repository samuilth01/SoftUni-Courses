function countStringOccurrences (text, word) {
    let arr = text.split(' ');
    let counter = 0;
    for (let i of arr) {
        if (i == word) {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences ('This is a word and it also is a sentence',
'is');