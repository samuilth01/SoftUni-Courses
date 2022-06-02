function stringSubstring (word, text) {
    let arr = text.split(' ');

    for (let i of arr) {
        if (i.toLowerCase() == word.toLowerCase()) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}

stringSubstring ('javascript',
'JavaScript is the best programming language');
console.log('---');
stringSubstring ('python',
'JavaScript is the best programming language');