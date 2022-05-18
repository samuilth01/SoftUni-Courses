function bombNumbers (numbers, bomb) {
    let bombNumber = bomb[0];
    let bombRadius = bomb[1];
    
    let indexOfBomb = numbers.indexOf(bombNumber);
    while (indexOfBomb !== -1) {
        let startIndex = Math.max(0, (indexOfBomb - bombRadius));
        let bombLength = bombRadius * 2 + 1;
        numbers.splice(startIndex, bombLength);
        indexOfBomb = numbers.indexOf(bombNumber);
    }
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    } 

    console.log(sum);
}

bombNumbers ([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);