function passwordGenerator (input) {
    let firstStr = input[0];
    let secondStr = input[1];
    let concatStr = firstStr + secondStr;
    let result = '';
    
    let thirdWord = input[2];
    let index = 0;
    let counter = 0;

    while (counter < concatStr.length) {
        let char = concatStr[counter];
        let charOfWord = thirdWord[index];

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            result += charOfWord.toUpperCase();
            index++;
        } else {
            result += char
        }
        counter++;
        if (index >= thirdWord.length) {
            index = 0;
        }
    }

    result = result
    .split('')
    .reverse()
    .join('');
    console.log(`Your generated password is ${result}`);
}

// passwordGenerator ([
//     'ilovepizza', 'ihatevegetables',
//     'orange'
//     ]);
// console.log('---');
passwordGenerator ([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]);
console.log('---');
passwordGenerator ([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]);