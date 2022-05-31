function oddOccurrences (input){
    let words = input.split(' ');
    let result = {};
    
    for (let word of words) {
        word = word.toUpperCase();
        if (result.hasOwnProperty(word) == false) {
            result[word] = 1;
        } else {
            let currCount = result[word];
            let newCount = Number(currCount) + 1;
            result[word] = newCount;
        }
    }

    let filtered = Object.entries(result);
    filtered = filtered.filter((a) => {
        if (a[1] % 2 == 1) {
            return true;
        } else {
            return false;
        }
    });

    let output = [];
    for (let [word, count] of filtered) {
        output.push(word.toLocaleLowerCase());
    }
    console.log(output.join(' '));
}

oddOccurrences ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');