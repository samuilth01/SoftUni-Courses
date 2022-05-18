function searchForANumber (array, commands) {
    let arr = array.slice(0, commands[0]);
    arr.splice(0, commands[1]);
    
    let num = commands[2];
    let numCounter = 0;
    for (let i of arr) {
        if (i == num) {
            numCounter++;
        }
    }

    console.log(`Number ${num} occurs ${numCounter} times.`);
}

searchForANumber ([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );