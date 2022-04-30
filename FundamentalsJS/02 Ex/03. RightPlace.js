function rightPlace (str, char, result) {
    
    let test = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '_') {
            test += char;
        } else {
            test += str[i];
        }
    }

    if (test == result) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i', 'String')