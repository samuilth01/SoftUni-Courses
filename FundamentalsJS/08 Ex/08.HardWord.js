function hardWord (input) {
    let sentence = input[0];
    let senteceInWords = input.shift().split(' ');
    let arrOfWords = input.shift();
    for (let text of senteceInWords) {
        let newWord = ''
        if (text.includes('_')) {
            let counter = 0;
            for (let i of text) {
                if (i == '_') {
                    newWord += '_'
                    counter++;
                } else {
                    break;
                }
            }

            for (let word of arrOfWords) {
                if (word.length == counter) {
                    sentence = sentence.replace(newWord, word)
                }
            }
        }
    }

    console.log(sentence);
}

hardWord (['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pharmacist', 'pie', 'bring', 'glad', 'During', 'amazing', 'sprained']]
);